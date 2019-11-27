import React, { useState, useEffect, createContext } from 'react';
import usersData from './usersData';
import questionsData, { QUESTION_TYPE } from './questionsData';

export const UserContext = createContext();

export const UserContextProvider = props => {
  //get the first user is default. After finish authentication, will be replace the use loged in
  const [user, setUser] = useState(usersData[0]);
  const [questions, setQuestions] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [questionLoaded, setQuestionLoaded] = useState(null);

  const [questionIdArray, setQuestionIdArray] = useState([]);

  const [answerSlide, setAnswerSlide] = useState(0);
  const [answerRange, setAnswerRange] = useState(0);
  const [answerTrueFalse, setAnswerTrueFalse] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [answerOptions, setAnswerOptions] = useState(0);
  const [answerDate, setAnswerDate] = useState('');

  useEffect(() => {
    console.log('userContext useEffect...');

    setUser({ ...user, questions: questionsData });
    setQuestions(questionsData);
  }, []);

  useEffect(() => {
    console.log('userContext second useEffect...');

    if (user.questions) {
      user.questions.map(question => {
        let set = new Set();
        question.questions.map(item => {
          set.add(item.nextQuestion.defaultNextQuestion);
        });
        // console.log(set.size);
        question.numberOfQuestion = set.size;
      });
      setIsLoaded(true);
    }
  }, [user]);

  const getQuestion = (level, id) => {
    // level = parseInt(level);
    // const getQuestionLevel = questions.find(question => question.level === level);
    const getQuestionLevel = getLevel(level);
    if (getQuestionLevel) {
      const getQuestionId = getQuestionLevel.questions.find(question => question.id === id);
      // setQuestionLoaded(getQuestionId);
      // console.log('question loaded', questionLoaded);
      return getQuestionId;
    }
  };

  const resetState = () => {
    setAnswerSlide(0);
    setAnswerRange(0);
    setAnswerTrueFalse('');
    setAnswerText('');
    setAnswerOptions(0);
    setAnswerDate('');
  };

  const getLevel = level => {
    level = parseInt(level);
    return questions.find(question => question.level === level);
  };

  const getStartQuestionId = level => {
    const getQuestionLevel = getLevel(level);
    //console.log(getQuetionLevel);
    if (getQuestionLevel) {
      //console.log(getQuestionLevel.startQuestionId);
      return getQuestionLevel.startQuestionId;
    }
  };

  const getNextQuestionId = question => {
    //const type = question.type;
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
          //console.log('range', condition, answerRange);
          if (condition) {
            condition = parseInt(condition);
            if (answerRange <= condition) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.trueFalse:
          // console.log('true false: ', condition, answerTrueFalse);
          if (condition) {
            if (answerTrueFalse === condition) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.text:
          //console.log('answer text', condition);
          return question.nextQuestion.defaultNextQuestion;
        case QUESTION_TYPE.options:
          //console.log('options', condition, answerOptions);
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
      //console.log('next question id log', type);
    }
  };

  const substractEXP = rewardEXPCost => {
    setUser({...user, exp: user.exp - rewardEXPCost});
  }

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
        setAnswerText,
        answerOptions,
        setAnswerOptions,
        setAnswerDate,
        setAnswerTrueFalse,
        isLoaded,
        getStartQuestionId,
        getNextQuestionId,
        questionLoaded,
        setQuestionLoaded,
        questionIdArray,
        setQuestionIdArray,
        resetState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const PeiliUserConsumer = UserContext.Consumer;
