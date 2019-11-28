import React from 'react';
import './questions-bar.styles.scss';

// import progessImg from '../../../assets/images/ProgressBar.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const QuestionsBar = (props: any) => {
  const { nextQuestion, prevQuestion, numberOfQuestion, numberOfAnswer } = props;

  return (
    <div className="questions-bar">
      <FaArrowLeft className="question-bar-icons" onClick={prevQuestion} />
      <div className="questions-bar-progress">
        <h3>Questions completed</h3>
        <p>
          {numberOfAnswer}/{numberOfQuestion}
        </p>
        {/* <img src={progessImg} alt="" /> */}
      </div>
      <FaArrowRight className="question-bar-icons" onClick={nextQuestion} />
    </div>
  );
};

export default QuestionsBar;
