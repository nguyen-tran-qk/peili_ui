import React from 'react';
import './questions-content.styles.scss';

// import { QuestionContext } from '../../../context/QuestionContext';
import TypesSlider from '../question-types/question-types-slider/question-types-slider.component';
import TypesRange from '../question-types/question-types-range/question-types-range.component';
import TypesTrueFalse from '../question-types/question-types-trueFalse/question-types-trueFalse.component';
import TypesText from '../question-types/question-types-text/question-types-text.component';
import TypesOptions from '../question-types/question-types-options/question-types-options.component';
import TypesDate from '../question-types/question-types-date/question-types-date.component';

const QuestionsContent = ({ question }) => {
  if (question) {
    return (
      <div className="questions-content">
        <p>{question && question.questions.content}</p>
        {question && question.type === 'slider' ? <TypesSlider /> : null}
        {question && question.type === 'range' ? <TypesRange /> : null}
        {question && question.type === 'trueFalse' ? <TypesTrueFalse /> : null}
        {question && question.type === 'text' ? <TypesText /> : null}
        {question && question.type === 'options' ? <TypesOptions /> : null}
        {question && question.type === 'date' ? <TypesDate /> : null}
      </div>
    );
  } else {
    return null;
  }
};

export default QuestionsContent;
