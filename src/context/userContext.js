import React, { useState, useEffect, createContext } from 'react';
import usersData from './usersData';
import questionsData from './questionsData';
import { async } from 'q';

export const UserContext = createContext();

export const UserContextProvider = props => {
  //get the first user is default. After finish authentication, will be replace the use loged in
  const [user, setUser] = useState(usersData[0]);
  const [questions, setQuestions] = useState([]);

  const [answerSlide, setAnswerSlide] = useState(0);

  useEffect(() => {
    console.log('userContext useEffect...');

    setUser({ ...user, questions: questionsData });
    setQuestions(questionsData);
  }, []);

  const getQuestion = (level, id) => {
    level = parseInt(level);
    const getQuestionLevel = questions.find(question => question.level === level);

    if (getQuestionLevel) {
      const getQuestionId = getQuestionLevel.questions.find(question => question.id === id);
      return getQuestionId;
    }
  };

  // useEffect(() => {
  //   if (user.questions) {
  //     console.log('userContext set questions...');
  //     setQuestions(user.questions);
  //   }
  // }, []);

  return (
    <UserContext.Provider value={{ user, questions, getQuestion, answerSlide, setAnswerSlide }}>{props.children}</UserContext.Provider>
  );
};
