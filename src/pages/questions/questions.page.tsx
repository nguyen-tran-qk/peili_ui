import React, { useContext, useState, useEffect } from 'react';
import './questions.styles.scss';

import QuestionsContent from '../../components/questions/questions-content/questions-content.component';
import QuestionsBar from '../../components/questions/questions-bar/questions-bar.component';

import { UserContext } from '../../context/userContext';
import { withRouter } from 'react-router-dom';

const QuestionsPage = props => {
  const {
    getQuestion,
    getStartQuestionId,
    getNextQuestionId,
    questionLoaded,
    setQuestionLoaded,
    questionIdArray,
    setQuestionIdArray,
    resetState,
  } = useContext(UserContext);

  const level = props.match.params.level;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startQuestionId = getStartQuestionId(level);
    const question = getQuestion(level, startQuestionId);

    // setQuestionId([...questionId, startQuestionId]);
    setQuestionIdArray([startQuestionId]);
    setQuestionLoaded(question);
    setIsLoaded(true);
  }, [isLoaded]);
  console.log('Question Id Array: ', questionIdArray);
  // console.log(startQuestionId);

  const nextQuestion = () => {
    console.log('next question');
    const nextQuestionId = getNextQuestionId(questionLoaded);
    setQuestionLoaded(getQuestion(level, nextQuestionId));
    setQuestionIdArray([...questionIdArray, nextQuestionId]);
    // console.log(question);
    resetState();
  };

  // console.log(nextQuestionId);
  if (questionLoaded) {
    return (
      <div className="questions-page">
        <QuestionsContent question={questionLoaded} />
        <QuestionsBar nextQuestion={nextQuestion} />
      </div>
    );
  } else {
    return null;
  }
};

export default withRouter(QuestionsPage);
