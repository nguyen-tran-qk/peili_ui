import React, { useContext } from 'react';
import './question-types-range.styles.scss';

import { UserContext } from '../../../../context/userContext';

const TypesRange = () => {
  const { setAnswerRange } = useContext(UserContext);

  const handleChange = e => {
    setAnswerRange(e.target.value);
  };

  return (
    <div className="question-types-range">
      <div className="question-types-range-input-container">
        <input type="radio" name="range1" value="1" className="quesion-types-range-input" onClick={handleChange} />
        <input type="radio" name="range1" value="2" className="quesion-types-range-input" onClick={handleChange} />
        <input type="radio" name="range1" value="3" className="quesion-types-range-input" onClick={handleChange} />
        <input type="radio" name="range1" value="4" className="quesion-types-range-input" onClick={handleChange} />
        <input type="radio" name="range1" value="5" className="quesion-types-range-input" onClick={handleChange} />
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
