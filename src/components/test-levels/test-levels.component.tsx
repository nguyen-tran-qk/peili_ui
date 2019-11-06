import React from 'react';
import './test-levels.styles.scss';

import doneImg from '../../assets/images/done.png';
import lockedImg from '../../assets/images/locked.png';
import processingImg from '../../assets/images/processing.png';

import { Link } from 'react-router-dom';

const TestLevels = (props: any) => {
  const { level, exp, status } = props;
  let image = null;
  let bcg = '';
  let link = '';
  switch (status) {
    case 'done':
      image = doneImg;
      bcg = 'doneBcg';
      link = '/questions-review';
      break;
    case 'locked':
      image = lockedImg;
      link = '/tests';
      break;
    default:
      image = processingImg;
      bcg = 'processing';
      link = '/questions';
      break;
  }
  return (
    <Link to={link}>
      <div className={`test-levels ${bcg}`}>
        <h2 className="test-levels-title">level {level}</h2>
        <p className="test-levels-exp">Answer questions to get {exp} EXP</p>
        <div className="test-levels-img-container">
          <img src={image} alt="done" />
        </div>
      </div>
    </Link>
  );
};

export default TestLevels;
