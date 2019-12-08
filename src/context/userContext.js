import React, { useState, useEffect, createContext } from 'react';
import usersData from './usersData';
import questionsData, { QUESTION_TYPE } from './questionsData';

export const UserContext = createContext();

export const UserContextProvider = props => {
  //get the first user is default. After finish authentication, will be replace the use loged in
  const [user, setUser] = useState({...usersData[0], questions: questionsData});
  const questions = questionsData;
  const [isLoaded, setIsLoaded] = useState(false);
  const [questionLoaded, setQuestionLoaded] = useState(null);
  const [questionIdArray, setQuestionIdArray] = useState([]);
  const [answerSlide, setAnswerSlide] = useState(0);
  const [answerRange, setAnswerRange] = useState(0);
  const [answerTrueFalse, setAnswerTrueFalse] = useState('');
  const [answerOptions, setAnswerOptions] = useState(0);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('usersList')) {
      localStorage.setItem('usersList', JSON.stringify(usersData));
    } else {
      setUsersList(JSON.parse(localStorage.getItem('usersList')));
    }
  }, []);

  useEffect(() => {
    if (user.questions) {
      user.questions.forEach(question => {
        let set = new Set();
        question.questions.forEach(item => {
          set.add(item.nextQuestion.defaultNextQuestion);
        });
        question.numberOfQuestion = set.size;
      });
      setIsLoaded(true);
    }
  }, [user]);

  const getQuestion = (level, id) => {
    const getQuestionLevel = getLevel(level);
    if (getQuestionLevel) {
      const getQuestionId = getQuestionLevel.questions.find(question => question.id === id);
      return getQuestionId;
    }
  };

  const resetState = () => {
    setAnswerSlide(0);
    setAnswerRange(0);
    setAnswerTrueFalse('');
    setAnswerOptions(0);
  };

  const getLevel = level => {
    level = parseInt(level);
    return questions.find(question => question.level === level);
  };

  const getStartQuestionId = level => {
    const getQuestionLevel = getLevel(level);
    if (getQuestionLevel) {
      return getQuestionLevel.startQuestionId;
    }
  };

  const getNextQuestionId = question => {
    if (question) {
      const type = question.type;
      let condition = question.nextQuestion.condition;
      switch (type) {
        case QUESTION_TYPE.slider:
          if (condition) {
            condition = parseInt(condition);
            if (answerSlide < condition) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.range:
          if (condition) {
            condition = parseInt(condition);
            if (answerRange <= condition) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.trueFalse:
          if (condition) {
            if (answerTrueFalse === condition) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.text:
          return question.nextQuestion.defaultNextQuestion;
        case QUESTION_TYPE.options:
          if (condition) {
            condition = parseInt(condition);
            if (condition <= answerOptions) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.date:
          return question.nextQuestion.defaultNextQuestion;
        default:
          break;
      }
    }
  };

  const substractEXP = rewardEXPCost => {
    setUser({ ...user, exp: user.exp - rewardEXPCost });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        substractEXP,
        questions,
        getQuestion,
        answerSlide,
        setAnswerSlide,
        answerRange,
        setAnswerRange,
        answerOptions,
        setAnswerOptions,
        setAnswerTrueFalse,
        isLoaded,
        getStartQuestionId,
        getNextQuestionId,
        questionLoaded,
        setQuestionLoaded,
        questionIdArray,
        setQuestionIdArray,
        resetState,
        usersList,
        setUsersList,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const PeiliUserConsumer = UserContext.Consumer;
