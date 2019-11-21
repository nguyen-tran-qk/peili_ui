import React from 'react';
import './question-types-options.styles.scss';

const TypesOptions = () => {
  return (
    <div className="question-types-options">
      <div className="question-types-options-group">
        <input type="checkbox" id="radio-options" className="question-types-options-checkbox" name="types-options" value="1" />
        <label htmlFor="radio-options">Option 1</label>
      </div>
      <div className="question-types-options-group">
        <input type="checkbox" id="radio-options" className="question-types-options-checkbox" name="types-options" value="1" />
        <label htmlFor="radio-options">Option 2</label>
      </div>
      <div className="question-types-options-group">
        <input type="checkbox" id="radio-options" className="question-types-options-checkbox" name="types-options" value="1" />
        <label htmlFor="radio-options">Option 3</label>
      </div>
      <div className="question-types-options-group">
        <input type="checkbox" id="radio-options" className="question-types-options-checkbox" name="types-options" value="1" />
        <label htmlFor="radio-options">Option 4</label>
      </div>
    </div>
  );
};

export default TypesOptions;
