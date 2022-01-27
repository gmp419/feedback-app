import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import data from './data/FeedbackData'
import { v4 as uuidv4 } from 'uuid';
import About from "./pages/About";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    NavLink
} from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";

function App() {

    const [feedback, setfeedback] = useState(data);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setfeedback(feedback.filter(item => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setfeedback([newFeedback, ...feedback]);

    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/"
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDeleteUp={deleteFeedback} />
                            </>
                        }
                    >
                    </Route>

                    <Route path="/about" element={<About />} />

                </Routes>

                <AboutIconLink />

            </div>
        </Router>
    );
}

export default App;
