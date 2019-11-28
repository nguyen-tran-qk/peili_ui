import React from 'react';
import './question-types-options.styles.scss';

const TypesOptions = (props: any) => {
  const { handleChange, answer } = props;

  return (
    <div className="question-types-options">
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          value="1"
          checked={(answer && answer[0] === 1) || false}
          onChange={handleChange}
        />
        <label htmlFor="radio-options">Option 1</label>
      </div>
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          value="2"
          checked={(answer && answer[1] === 2) || false}
          onChange={handleChange}
        />
        <label htmlFor="radio-options">Option 2</label>
      </div>
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          value="3"
          checked={(answer && answer[2] === 3) || false}
          onChange={handleChange}
        />
        <label htmlFor="radio-options">Option 3</label>
      </div>
      <div className="question-types-options-group">
        <input
          type="checkbox"
          id="radio-options"
          className="question-types-options-checkbox"
          name="types-options"
          value="4"
          checked={(answer && answer[3] === 4) || false}
          onChange={handleChange}
        />
        <label htmlFor="radio-options">Option 4</label>
      </div>
    </div>
  );
};

export default TypesOptions;
