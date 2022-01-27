import React, { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setrating] = useState(10);

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Please enter at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10) {
        const newFeedback = {
            text,
            rating,
        };
        handleAdd(newFeedback);
        setText("");
    }
}

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate a service with us?</h2>
        <RatingSelect select={(rating) => setrating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" disabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
