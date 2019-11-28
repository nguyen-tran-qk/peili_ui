import React from 'react';
import './tests-done.styles.scss';
import doneImg from '../../../assets/images/done.png';
import { Link } from 'react-router-dom';

const TestsDone = () => {
  return (
    <div className="tests-done">
      <img src={doneImg} alt="done" />
      <Link to="/tests" className="tests-done-link">
        Back to Test
      </Link>
    </div>
  );
};

export default TestsDone;
