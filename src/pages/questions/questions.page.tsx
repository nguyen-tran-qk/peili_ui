import React, { useContext, useState, useEffect } from 'react';
import './questions.styles.scss';

import QuestionsContent from '../../components/questions/questions-content/questions-content.component';
import QuestionsBar from '../../components/questions/questions-bar/questions-bar.component';
import QuestionContextProvider from '../../context/QuestionContext';
import { UserContext } from '../../context/userContext';
import { withRouter } from 'react-router-dom';

const QuestionsPage = props => {
  const { user, questions, getQuestion } = useContext(UserContext);
  // console.log(user, questions);
  // console.log(props.match.params.level);
  const question = getQuestion(props.match.params.level, '6');

  return (
    <div className="questions-page">
      <QuestionsContent question={question} />
      {/* <QuestionsBar /> */}
    </div>
  );
};

export default withRouter(QuestionsPage);
