import React from "react";
import "./test-levels.styles.scss";

import doneImg from "../../assets/images/done.png";
import lockedImg from "../../assets/images/locked.png";
import processingImg from "../../assets/images/processing.png";

const TestLevels = (props: any) => {
  const { level, exp, status } = props;
  let image = null;
  let bcg = "";
  switch (status) {
    case "done":
      image = doneImg;
      bcg = "doneBcg";
      break;
    case "locked":
      image = lockedImg;
      break;
    default:
      image = processingImg;
      bcg = "processing";
      break;
  }
  return (
    <div className={`test-levels ${bcg}`}>
      <h2 className="test-levels-title">level {level}</h2>
      <p className="test-levels-exp">Answer questions to get {exp} EXP</p>
      <div className="test-levels-img-container">
        <img src={image} alt="done" />
      </div>
    </div>
  );
};

export default TestLevels;
