import React from 'react';
import './questions.styles.scss';

import QuestionsContent from '../../components/questions/questions-content/questions-content.component';
import QuestionsBar from '../../components/questions/questions-bar/questions-bar.component';
import QuestionContextProvider from '../../context/QuestionContext';

const QuestionsPage = () => {
  return (
    <div className="questions-page">
      <QuestionContextProvider>
        <QuestionsContent />
        <QuestionsBar />
      </QuestionContextProvider>
    </div>
  );
};

export default QuestionsPage;
