import React from 'react';
import './question-types-trueFalse.styles.scss';

const TypesTrueFalse = (props: any) => {
  const { handleChange, answer } = props;

  return (
    <div className="question-types-trueFalse">
      <div className="question-types-trueFalse-group">
        <input
          type="radio"
          id="radio-true-false"
          className="question-types-trueFalse-radio"
          name="truefalse"
          value="true"
          checked={answer === 'true'}
          onChange={handleChange}
        />
        <label htmlFor="radio-true-false">True</label>
      </div>

      <div className="question-types-trueFalse-group">
        <input
          type="radio"
          id="radio-true-false"
          className="question-types-trueFalse-radio"
          name="truefalse"
          value="false"
          checked={answer === 'false'}
          onChange={handleChange}
        />
        <label htmlFor="radio-true-false">False</label>
      </div>
    </div>
  );
};

export default TypesTrueFalse;
