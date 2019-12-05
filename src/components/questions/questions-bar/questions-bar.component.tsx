import React from 'react';
import './questions-bar.styles.scss';

// import progessImg from '../../../assets/images/ProgressBar.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const QuestionsBar = (props: any) => {
  const { nextQuestion, prevQuestion, numberOfQuestion, numberOfAnswer, nextButtonActive, backButtonActive } = props;

  let nextBtn = null;
  let backBtn = null;
  if (nextButtonActive) {
    nextBtn = <FaArrowRight className="question-bar-icons question-bar-icons--active" onClick={nextQuestion} />;
  } else {
    nextBtn = <FaArrowRight className="question-bar-icons" />;
  }

  if (backButtonActive) {
    backBtn = <FaArrowLeft className="question-bar-icons question-bar-icons--active" onClick={prevQuestion} />;
  } else {
    backBtn = <FaArrowLeft className="question-bar-icons" />;
  }

  return (
    <div className="questions-bar">
      <FaArrowLeft className="question-bar-icons " onClick={prevQuestion} />
      {/* {backBtn} */}
      <div className="questions-bar-progress">
        <h3>Questions completed</h3>
        <p>
          {numberOfAnswer}/{numberOfQuestion}
        </p>
        {/* <img src={progessImg} alt="" /> */}
      </div>
      {/* {nextBtn} */}
      <FaArrowRight className="question-bar-icons" onClick={nextQuestion} />
    </div>
  );
};

export default QuestionsBar;
