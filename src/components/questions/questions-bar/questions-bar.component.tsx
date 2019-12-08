import React from 'react';
import './questions-bar.styles.scss';

import QuestionsBarProgress from './questions-bar-progress/questions-bar-progress.component';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const QuestionsBar = (props: any) => {
  const {
    nextQuestion,
    prevQuestion,
    numberOfQuestion,
    numberOfAnswer,
    nextButtonActive,
    backButtonActive,
    currentIndexInQuestionIdArray,
  } = props;

  let nextBtn = null;
  let backBtn = null;
  nextBtn = nextButtonActive ? (
    <FaArrowRight className="question-bar-icons question-bar-icons--active" onClick={nextQuestion} />
  ) : (
    <FaArrowRight className="question-bar-icons" />
  );

  backBtn = backButtonActive ? (
    <FaArrowLeft className="question-bar-icons question-bar-icons--active" onClick={prevQuestion} />
  ) : (
    <FaArrowLeft className="question-bar-icons" />
  );

  return (
    <div className="questions-bar">
      {/* <FaArrowLeft className="question-bar-icons " onClick={prevQuestion} /> */}
      {backBtn}
      <div className="questions-bar-content">
        <h3>
          Questions completed {numberOfAnswer}/{numberOfQuestion}
        </h3>
        <QuestionsBarProgress
          numberOfAnswer={numberOfAnswer}
          numberOfQuestion={numberOfQuestion}
          currentIndexInQuestionIdArray={currentIndexInQuestionIdArray}
        />
      </div>
      {nextBtn}
      {/* <FaArrowRight className="question-bar-icons" onClick={nextQuestion} /> */}
    </div>
  );
};

export default QuestionsBar;
