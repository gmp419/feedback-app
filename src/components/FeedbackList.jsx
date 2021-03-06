import React from "react";
import FeedbackItem from "./FeedbackItem";
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {

  const {feedback} = useContext(FeedbackContext);

  //alert(feedback);
  console.log(feedback);

  if (!feedback || feedback.length === 0) return <p>Nothing to display</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <FeedbackItem
            key={item.id}
            item={item}
          />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
