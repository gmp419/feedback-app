import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDeleteUp }) {
  if (!feedback || feedback.length === 0) return <p>Nothing to display</p>;
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDeleteUp}
        />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackList;
