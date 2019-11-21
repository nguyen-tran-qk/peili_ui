import React, { useContext } from 'react';
import './question-types-trueFalse.styles.scss';

import { UserContext } from '../../../../context/userContext';

const TypesTrueFalse = () => {
  const { setAnswerTrueFalse } = useContext(UserContext);
  return (
    <div className="question-types-trueFalse">
      <div className="question-types-trueFalse-group">
        <input
          type="radio"
          id="radio-true-false"
          className="question-types-trueFalse-radio"
          name="truefalse"
          onClick={() => setAnswerTrueFalse('true')}
        />
        <label htmlFor="radio-true-false">True</label>
      </div>

      <div className="question-types-trueFalse-group">
        <input
          type="radio"
          id="radio-true-false"
          className="question-types-trueFalse-radio"
          name="truefalse"
          onClick={() => setAnswerTrueFalse('false')}
        />
        <label htmlFor="radio-true-false">False</label>
      </div>
    </div>
  );
};

export default TypesTrueFalse;
