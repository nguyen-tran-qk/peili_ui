import React, { useContext } from 'react';
import './questions-content.styles.scss';

import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

import { QuestionContext } from '../../../context/QuestionContext';

const QuestionsContent = () => {
  const { selectedQuestion } = useContext(QuestionContext);
  const styleImg = {
    width: '100%',
    margin: '0',
  };
  switch (selectedQuestion.id) {
    case 3:
      styleImg.width = '200px';
      break;
    case 5:
      styleImg.width = '200px';
      break;
    case 6:
      styleImg.width = '80%';
      styleImg.margin = '0 auto';
      break;
    case 7:
      styleImg.width = '100px';
      styleImg.margin = '250px auto';
      break;
    default:
      styleImg.width = '100%';
      styleImg.margin = '0';
  }
  return (
    <div className="questions-content">
      <p>{selectedQuestion.content}</p>
      <div className="questions-content-img-container">
        <img src={selectedQuestion.image} alt="question" style={styleImg} />
        {selectedQuestion.id === 7 ? (
          <Link to="/questions-review" className="questions-content-see-answers">
            see answers <FaArrowRight className="questions-content-see-answers-icon" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default QuestionsContent;
