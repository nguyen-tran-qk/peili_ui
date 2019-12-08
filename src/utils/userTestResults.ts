import QUESTIONS_DATA from '../context/questionsData';

export const getTestResultsByUser = (userId: string) => {
  // const allTestResults = JSON.parse(localStorage['TestResults']);
  const userTestResults = JSON.parse(localStorage.getItem(userId));
  // console.log(allTestResults);
  if (userTestResults) {
    return userTestResults;
  } else {
    let questions = [...QUESTIONS_DATA];

    // get the number of questions in level
    if (questions) {
      questions = questions.map(question => {
        const set = new Set();
        question.questions.forEach(item => {
          set.add(item.nextQuestion.defaultNextQuestion);
        });
        question.numberOfQuestion = set.size;
        return question;
      });
    }

    const newUserTestResults = {
      totalExp: 0,
      totalSchoolPoint: 0,
      totalFreeTimePoint: 0,
      totalHealthPoint: 0,
      totalSocialLifePoint: 0,
      testResults: questions,
    };

    localStorage.setItem(userId, JSON.stringify(newUserTestResults));
    return newUserTestResults;
  }
};
