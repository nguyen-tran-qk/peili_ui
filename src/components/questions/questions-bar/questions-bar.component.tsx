import React from 'react';
import './questions-bar.styles.scss';

import progessImg from '../../../assets/images/ProgressBar.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const QuestionsBar = () => {
  return (
    <div className="questions-bar">
      <FaArrowLeft className="question-bar-icons" />
      <div className="questions-bar-progress">
        <h3>Questions completed</h3>
        <img src={progessImg} alt="" />
      </div>
      <FaArrowRight className="question-bar-icons" />
    </div>
  );
};

export default QuestionsBar;
