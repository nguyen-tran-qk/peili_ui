import React from 'react';
import './test-levels.styles.scss';

import doneImg from '../../assets/images/done.png';
import lockedImg from '../../assets/images/locked.png';
import processingImg from '../../assets/images/processing.png';

import { FaPlayCircle, FaUndoAlt, FaChartBar, FaLock, FaCheckCircle } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const TestLevels = (props: any) => {
  const { level, exp, status, totalQuestions, doneQuestions } = props;
  let image = null;
  let bcg = '';
  let link = '';
  let content = null;
  switch (status) {
    case 'done':
      image = doneImg;
      bcg = 'doneBcg';
      link = '/quiz-results';
      content = (
        <div className="test-levels-img-container">
          <p className="test-levels-status">
            {doneQuestions}/{totalQuestions}
            <FaCheckCircle style={{ color: 'lightgreen', right: '-26%', top: '-40%' }} className="test-levels-status-icons" />
          </p>
          <div className="test-levels-footer test-levels-footer--done">
            <Link to={link} className="test-levels-links">
              <FaChartBar />
            </Link>
            <Link to={`/tests/${level}`} className="test-levels-links">
              <FaUndoAlt />
            </Link>
          </div>
        </div>
      );
      break;
    case 'lock':
      image = lockedImg;

      content = (
        <div className="test-levels-img-container">
          <p className="test-levels-status">
            {doneQuestions}/{totalQuestions}
            <FaLock className="test-levels-status-icons" />
          </p>
        </div>
      );
      break;
    default:
      image = processingImg;
      bcg = 'processing';
      link = '/tests/' + level;
      content = (
        <div className="test-levels-img-container">
          <p className="test-levels-status">
            {doneQuestions}/{totalQuestions}
          </p>
          <div className="test-levels-footer">
            <Link to={link} className="test-levels-links">
              <FaPlayCircle />
            </Link>
          </div>
        </div>
      );
      break;
  }
  return (
    <div className={`test-levels ${bcg}`}>
      <h2 className="test-levels-title">level {level}</h2>
      <p className="test-levels-exp">Answer questions to get {exp} EXP</p>
      <div className="test-levels-img-container">{content}</div>
    </div>
  );
};

export default TestLevels;
