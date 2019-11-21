const QUESTION_TYPE = {
  slider: 'slider',
  range: 'range',
  trueFalse: 'trueFalse',
  text: 'text',
  options: 'options',
  date: 'date',
};

const QUESTION_STATUS = {
  lock: 'lock',
  done: 'done',
  processing: '0',
};

const QUESTIONS_DATA = [
  {
    level: 1,
    status: QUESTION_STATUS.processing,
    totalExp: 6,
    userGotExp: 0,
    questions: [
      {
        id: '1',
        type: QUESTION_TYPE.slider,
        questions: {
          content: 'ID 1 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 50,
          nextQuestionId: 3,
          defaultNextQuestion: 2,
        },
        exp: 1,
      },
      {
        id: '2',
        type: QUESTION_TYPE.range,
        questions: {
          content: 'ID 2 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 3,
          nextQuestionId: 4,
          defaultNextQuestion: 3,
        },
        exp: 1,
      },
      {
        id: '3',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content: 'ID 3 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: 5,
          defaultNextQuestion: 4,
        },
        exp: 1,
      },
      {
        id: '4',
        type: QUESTION_TYPE.text,
        questions: {
          content: 'ID 4 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 5,
        },
        exp: 1,
      },
      {
        id: '5',
        type: QUESTION_TYPE.options,
        questions: {
          content: 'ID 5 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: '',
        nextQuestion: {
          condition: 2,
          nextQuestionId: 6,
          defaultNextQuestion: 5,
        },
        exp: 1,
      },
      {
        id: '6',
        type: QUESTION_TYPE.date,
        questions: {
          content: 'ID 6 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 6,
        },
        exp: 1,
      },
    ],
  },
  {
    level: 2,
    status: QUESTION_STATUS.lock,
    totalExp: 12,
    userGotExp: 0,
    questions: [
      {
        id: '11',
        type: QUESTION_TYPE.slider,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '1-50',
            nextQuestionId: 12,
          },
          {
            answerContent: '51-100',
            nextQuestionId: 13,
          },
          {
            defaultNextQuestion: 12,
          },
        ],
        exp: 2,
      },
      {
        id: '12',
        type: QUESTION_TYPE.range,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '1-3',
            nextQuestionId: 13,
          },
          {
            answerContent: '4-5',
            nextQuestionId: 14,
          },
          {
            defaultNextQuestion: 13,
          },
        ],
        exp: 2,
      },
      {
        id: '13',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: 'true',
            nextQuestionId: 14,
          },
          {
            answerContent: '50-100',
            nextQuestionId: 15,
          },
          {
            defaultNextQuestion: 14,
          },
        ],
        exp: 2,
      },
      {
        id: '14',
        type: QUESTION_TYPE.text,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '',
            nextQuestionId: 15,
          },
          {
            defaultNextQuestion: 15,
          },
        ],
        exp: 2,
      },
      {
        id: '15',
        type: QUESTION_TYPE.options,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: [
          {
            answerContent: 'option 1',
            nextQuestionId: 16,
          },
          {
            answerContent: 'option 2',
            nextQuestionId: 17,
          },
          {
            defaultNextQuestion: 16,
          },
        ],
        exp: 2,
      },
      {
        id: '16',
        type: QUESTION_TYPE.date,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '',
            nextQuestionId: 17,
          },
          {
            defaultNextQuestion: 16,
          },
        ],
        exp: 2,
      },
    ],
  },
  {
    level: 3,
    status: QUESTION_STATUS.lock,
    totalExp: 18,
    userGotExp: 0,
    questions: [
      {
        id: '21',
        type: QUESTION_TYPE.slider,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '1-50',
            nextQuestionId: 22,
          },
          {
            answerContent: '51-100',
            nextQuestionId: 23,
          },
          {
            defaultNextQuestion: 22,
          },
        ],
        exp: 3,
      },
      {
        id: '22',
        type: QUESTION_TYPE.range,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '1-3',
            nextQuestionId: 23,
          },
          {
            answerContent: '4-5',
            nextQuestionId: 24,
          },
          {
            defaultNextQuestion: 23,
          },
        ],
        exp: 3,
      },
      {
        id: '23',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: 'true',
            nextQuestionId: 14,
          },
          {
            answerContent: '50-100',
            nextQuestionId: 15,
          },
          {
            defaultNextQuestion: 14,
          },
        ],
        exp: 3,
      },
      {
        id: '24',
        type: QUESTION_TYPE.text,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '',
            nextQuestionId: 25,
          },
          {
            defaultNextQuestion: 25,
          },
        ],
        exp: 3,
      },
      {
        id: '25',
        type: QUESTION_TYPE.options,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: [
          {
            answerContent: 'option 1',
            nextQuestionId: 26,
          },
          {
            answerContent: 'option 2',
            nextQuestionId: 27,
          },
          {
            defaultNextQuestion: 26,
          },
        ],
        exp: 3,
      },
      {
        id: '26',
        type: QUESTION_TYPE.date,
        questions: {
          content: 'There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: [
          {
            answerContent: '',
            nextQuestionId: 27,
          },
          {
            defaultNextQuestion: 26,
          },
        ],
        exp: 3,
      },
    ],
  },
];

export default QUESTIONS_DATA;
