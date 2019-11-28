export const QUESTION_TYPE = {
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

const QUESTION_CATEGORIES = {
  school: 'school',
  freeTime: 'free time',
  health: 'health',
  socialLife: 'social life',
};

const QUESTIONS_DATA = [
  {
    level: 1,
    status: QUESTION_STATUS.processing,
    totalExp: 10,
    userGotExp: 0,
    numberOfQuestion: 0,
    startQuestionId: '1',
    schoolPoint: 0,
    freeTimePoint: 0,
    healthPoint: 0,
    socialLifePoint: 0,
    questionIdArray: [],
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
          nextQuestionId: '22',
          defaultNextQuestion: '2',
        },
        category: QUESTION_CATEGORIES.school,
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
          nextQuestionId: '33',
          defaultNextQuestion: '3',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: '22',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content:
            'ID 22 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: '33',
          defaultNextQuestion: '3',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: '3',
        type: QUESTION_TYPE.text,
        questions: {
          content: 'ID 3 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: '4',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: '33',
        type: QUESTION_TYPE.options,
        questions: {
          content:
            'ID 33 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: '',
        nextQuestion: {
          condition: 2,
          nextQuestionId: '44',
          defaultNextQuestion: '4',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: '4',
        type: QUESTION_TYPE.date,
        questions: {
          content: 'ID 4 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: '5',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: '44',
        type: QUESTION_TYPE.slider,
        questions: {
          content:
            'ID 44 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 50,
          nextQuestionId: '55',
          defaultNextQuestion: '5',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: '5',
        type: QUESTION_TYPE.range,
        questions: {
          content: 'ID 5 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 3,
          nextQuestionId: '66',
          defaultNextQuestion: '6',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: '55',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content:
            'ID 55 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: '66',
          defaultNextQuestion: '6',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: '6',
        type: QUESTION_TYPE.text,
        questions: {
          content: 'ID 6 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: '7',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: '66',
        type: QUESTION_TYPE.options,
        questions: {
          content:
            'ID 66 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: '',
        nextQuestion: {
          condition: 2,
          nextQuestionId: '77',
          defaultNextQuestion: '7',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: '7',
        type: QUESTION_TYPE.date,
        questions: {
          content: 'ID 7 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: '8',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: '77',
        type: QUESTION_TYPE.slider,
        questions: {
          content:
            'ID 77 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 50,
          nextQuestionId: '88',
          defaultNextQuestion: '8',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: '8',
        type: QUESTION_TYPE.range,
        questions: {
          content: 'ID 8 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 3,
          nextQuestionId: '99',
          defaultNextQuestion: '9',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: '88',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content:
            'ID 88 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: '99',
          defaultNextQuestion: '9',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: '9',
        type: QUESTION_TYPE.text,
        questions: {
          content: 'ID 9 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: '10',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: '99',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content:
            'ID 99 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: '10',
          defaultNextQuestion: '10',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: '10',
        type: QUESTION_TYPE.date,
        questions: {
          content:
            'ID 10 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: '',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
    ],
  },
  {
    level: 2,
    status: QUESTION_STATUS.lock,
    totalExp: 10,
    userGotExp: 0,
    numberOfQuestion: 0,
    startQuestionId: '1',
    schoolPoint: 0,
    freeTimePoint: 0,
    healthPoint: 0,
    socialLifePoint: 0,
    questionIdArray: [],
    questions: [
      {
        id: 'a1',
        type: QUESTION_TYPE.slider,
        questions: {
          content:
            'ID a1 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 50,
          nextQuestionId: 'a22',
          defaultNextQuestion: 'a2',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: 'a2',
        type: QUESTION_TYPE.range,
        questions: {
          content:
            'ID a2 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 3,
          nextQuestionId: 'a33',
          defaultNextQuestion: 'a3',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: 'a22',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content:
            'ID a22 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: 'a33',
          defaultNextQuestion: 'a3',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: 'a3',
        type: QUESTION_TYPE.text,
        questions: {
          content:
            'ID a3 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 'a4',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: 'a33',
        type: QUESTION_TYPE.options,
        questions: {
          content:
            'ID a33 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: '',
        nextQuestion: {
          condition: 2,
          nextQuestionId: 'a44',
          defaultNextQuestion: 'a4',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: 'a4',
        type: QUESTION_TYPE.date,
        questions: {
          content:
            'ID a4 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 'a5',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: 'a44',
        type: QUESTION_TYPE.slider,
        questions: {
          content:
            'ID a44 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 50,
          nextQuestionId: 'a55',
          defaultNextQuestion: 'a5',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: 'a5',
        type: QUESTION_TYPE.range,
        questions: {
          content:
            'ID a5 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 3,
          nextQuestionId: 'a66',
          defaultNextQuestion: 'a6',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: 'a55',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content:
            'ID a55 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: 'a66',
          defaultNextQuestion: 'a6',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: 'a6',
        type: QUESTION_TYPE.text,
        questions: {
          content:
            'ID a6 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 'a7',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: 'a66',
        type: QUESTION_TYPE.options,
        questions: {
          content:
            'ID a66 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: '',
        nextQuestion: {
          condition: 2,
          nextQuestionId: 'a77',
          defaultNextQuestion: 'a7',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: 'a7',
        type: QUESTION_TYPE.date,
        questions: {
          content:
            'ID a7 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 'a8',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: 'a77',
        type: QUESTION_TYPE.slider,
        questions: {
          content:
            'ID a77 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 50,
          nextQuestionId: 'a88',
          defaultNextQuestion: 'a8',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: 'a8',
        type: QUESTION_TYPE.range,
        questions: {
          content:
            'ID a8 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 3,
          nextQuestionId: 'a99',
          defaultNextQuestion: 'a9',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
      {
        id: 'a88',
        type: QUESTION_TYPE.trueFalse,
        questions: {
          content:
            'ID a88 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          condition: 'true',
          nextQuestionId: 'a99',
          defaultNextQuestion: 'a9',
        },
        category: QUESTION_CATEGORIES.health,
        exp: 1,
      },
      {
        id: 'a9',
        type: QUESTION_TYPE.text,
        questions: {
          content:
            'ID a9 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 'a10',
        },
        category: QUESTION_CATEGORIES.socialLife,
        exp: 1,
      },
      {
        id: 'a99',
        type: QUESTION_TYPE.options,
        questions: {
          content:
            'ID a99 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: ['option1 content', 'option2 content', 'option3 content', 'option 4 content'],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: 'a10',
        },
        category: QUESTION_CATEGORIES.school,
        exp: 1,
      },
      {
        id: 'a10',
        type: QUESTION_TYPE.date,
        questions: {
          content:
            'ID a10 - There are many variations of passages of Lorem Ipsum available, words which dont look even slightly believable.',
          withOptions: [],
        },
        answer: '',
        nextQuestion: {
          defaultNextQuestion: '',
        },
        category: QUESTION_CATEGORIES.freeTime,
        exp: 1,
      },
    ],
  },
];

export default QUESTIONS_DATA;
