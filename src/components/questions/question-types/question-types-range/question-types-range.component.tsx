import React from 'react';
import './question-types-range.styles.scss';

const TypesRange = (props: any) => {
  const { handleChange, answer } = props;

  return (
    <div className="question-types-range">
      <div className="question-types-range-input-container">
        <input
          type="radio"
          name="range1"
          value="1"
          className="quesion-types-range-input"
          onChange={handleChange}
          checked={answer === '1'}
        />
        <input
          type="radio"
          name="range1"
          value="2"
          className="quesion-types-range-input"
          onChange={handleChange}
          checked={answer === '2'}
        />
        <input
          type="radio"
          name="range1"
          value="3"
          className="quesion-types-range-input"
          onChange={handleChange}
          checked={answer === '3'}
        />
        <input
          type="radio"
          name="range1"
          value="4"
          className="quesion-types-range-input"
          onChange={handleChange}
          checked={answer === '4'}
        />
        <input
          type="radio"
          name="range1"
          value="5"
          className="quesion-types-range-input"
          onChange={handleChange}
          checked={answer === '5'}
        />
      </div>
      <div className="question-types-range-label-container">
        <span>
          Strongly <br /> Disagree
        </span>
        <span>Neutral</span>
        <span>
          Strongly <br /> Agree
        </span>
      </div>
    </div>
  );
};

export default TypesRange;
