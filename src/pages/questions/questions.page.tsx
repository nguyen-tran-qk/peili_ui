import React from 'react';
import './questions.styles.scss';

import QuestionsContent from '../../components/questions/questions-content/questions-content.component';
import QuestionsBar from '../../components/questions/questions-bar/questions-bar.component';

const QuestionsPage = () => {
  return (
    <div className="questions-page">
      <QuestionsContent />
      <QuestionsBar />
    </div>
  );
};

export default QuestionsPage;
