import React from "react";
import "./questions-content.styles.scss";

import questionImg from "../../../assets/images/question.png";

const QuestionsContent = () => {
  return (
    <div className="questions-content">
      <p>
        There are many variations of passages of Lorem Ipsum available, words
        which don't look even slightly believable. Lorem Ipsum available, words
        which don't look even slightly believable.
      </p>
      <img src={questionImg} alt="question" />
    </div>
  );
};

export default QuestionsContent;
