import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setfeedback] = useState([
        {
            id: "1",
            text: "loremdjfshhdh ipsum",
            rating: "5"
        }
    ]);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setfeedback(feedback.filter(item => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setfeedback([newFeedback, ...feedback]);

    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;