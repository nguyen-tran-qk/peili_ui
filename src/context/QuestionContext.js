import React, { createContext, useState } from "react";

import questionSliderImg from "../assets/images/question-slider.png";
import questionRangeImg from "../assets/images/question-range.png";
import questionTrueFalseImg from "../assets/images/question-trueFalse.png";
import questionTextImg from "../assets/images/question-text.png";
import questionOptionsImg from "../assets/images/question-options.png";
import questionDateImg from "../assets/images/question-date.png";
import questionDone from "../assets/images/done.png";

export const QuestionContext = createContext();

// const TYPE_OF_QUESTIONS = {
//   slider: "slider",
//   range: "range",
//   trueFalse: "trueFalse",
//   text: "text",
//   options: "options",
//   date: "date"
// };

const QuestionContextProvider = props => {
  const questions = [
    {
      id: 1,
      content:
        "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
      image: questionSliderImg
    },
    {
      id: 2,
      content:
        "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
      image: questionRangeImg
    },
    {
      id: 3,
      content:
        "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
      image: questionTrueFalseImg
    },
    {
      id: 4,
      content:
        "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
      image: questionTextImg
    },
    {
      id: 5,
      content:
        "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
      image: questionOptionsImg
    },
    {
      id: 6,
      content:
        "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
      image: questionDateImg
    },
    {
      id: 7,
      content: "",
      image: questionDone
    }
  ];

  const [idQuestion, setIdQuestion] = useState(0);

  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const nextQuestion = () => {
    const max = questions.length;
    const id = idQuestion + 1;
    if (id < max) {
      setIdQuestion(id);
      setSelectedQuestion(questions[id]);
    }
  };

  const prevQuestion = () => {
    const id = idQuestion - 1;
    if (id >= 0) {
      setIdQuestion(id);
      setSelectedQuestion(questions[id]);
    }
  };

  return (
    <QuestionContext.Provider
      value={{ questions, selectedQuestion, nextQuestion, prevQuestion }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
