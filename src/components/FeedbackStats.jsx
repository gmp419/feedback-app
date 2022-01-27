import React from "react";
import PropTypes from "prop-types";


function FeedbackStats({ feedback }) {
  //calculate rating average
  let average =
    feedback.reduce((total, current) => total + current.rating, 0) /
    feedback.length;

  average = parseFloat(average.toFixed(1).replace(/\.0$/, ""));

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
