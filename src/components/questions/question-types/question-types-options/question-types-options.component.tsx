import React, { useContext } from 'react';
import './question-types-options.styles.scss';

import { UserContext } from '../../../../context/userContext';

const TypesOptions = () => {
  const { answerOptions, setAnswerOptions } = useContext(UserContext);

  const handleChecked = e => {
    const isChecked = e.target.checked;

    isChecked ? setAnswerOptions(answerOptions + 1) : setAnswerOptions(answerOptions - 1);
  };

  return (
    <div className="question-types-options">
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          onChange={handleChecked}
        />
        <label htmlFor="radio-options">Option 1</label>
      </div>
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          onChange={handleChecked}
        />
        <label htmlFor="radio-options">Option 2</label>
      </div>
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          onChange={handleChecked}
        />
        <label htmlFor="radio-options">Option 3</label>
      </div>
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          onChange={handleChecked}
        />
        <label htmlFor="radio-options">Option 4</label>
      </div>
    </div>
  );
};

export default TypesOptions;
