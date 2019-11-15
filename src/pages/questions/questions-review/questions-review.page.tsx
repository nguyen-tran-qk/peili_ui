import React from 'react';
import './questions-review.styles.scss';

import review1Img from '../../../assets/images/question-review1.png';
import review2Img from '../../../assets/images/question-review2.png';
import pieImg from '../../../assets/images/pie.png';

const QuestionsReview = () => {
  return (
    <div className="questions-review">
      <h2 className="questions-review-title">level 1</h2>
      <img src={review1Img} alt="review1" className="questions-review-img" />
      <div className="question-review-img-container">
        <img src={review2Img} alt="review2" className="questions-review-img" />
        <img src={pieImg} alt="pie" className="pie" />
      </div>
    </div>
  );
};

export default QuestionsReview;
