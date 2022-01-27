import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import data from './data/FeedbackData'

function App() {

    const [feedback, setfeedback] = useState(data);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setfeedback(feedback.filter(item => item.id !== id));
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDeleteUp={deleteFeedback} />
            </div>
        </>
    );
}

export default App;
