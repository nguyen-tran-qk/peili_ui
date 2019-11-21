import React from 'react';
import './question-types-range.styles.scss';

const TypesRange = () => {
  return (
    <div className="question-types-range">
      <div className="question-types-range-input-container">
        <input type="radio" name="range1" value="1" className="quesion-types-range-input" />
        <input type="radio" name="range1" value="2" className="quesion-types-range-input" />
        <input type="radio" name="range1" value="3" className="quesion-types-range-input" />
        <input type="radio" name="range1" value="4" className="quesion-types-range-input" />
        <input type="radio" name="range1" value="5" className="quesion-types-range-input" />
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
