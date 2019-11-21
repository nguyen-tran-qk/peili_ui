import React, { useContext } from 'react';
import './question-types-slider.styles.scss';

import { UserContext } from '../../../../context/userContext';

const TypesSlider = () => {
  const { answerSlide, setAnswerSlide } = useContext(UserContext);
  return (
    <div className="question-types-slider">
      <label htmlFor="slider">
        <p className="question-types-slider-text">{answerSlide}</p>
      </label>
      <input
        type="range"
        min="0"
        max="100"
        id="slider"
        value={answerSlide}
        onChange={e => setAnswerSlide(parseInt(e.target.value))}
        className="question-types-slider-input"
      />
    </div>
  );
};

export default TypesSlider;
