import React from 'react';
import './question-types-slider.styles.scss';

const TypesSlider = (props: any) => {
  // const { answerSlide, setAnswerSlide } = useContext(UserContext);
  const { handleChange, answer } = props;
  return (
    <div className="question-types-slider">
      <label htmlFor="slider">
        <p className="question-types-slider-text">{answer ? answer : 0}</p>
      </label>
      <input
        type="range"
        min="0"
        max="100"
        id="slider"
        value={answer ? answer : 0}
        onChange={handleChange}
        className="question-types-slider-input"
      />
    </div>
  );
};

export default TypesSlider;
