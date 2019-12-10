import React from 'react';
import './questions.styles.scss';

import { QUESTION_TYPE } from '../../context/questionsData';

import TypesSlider from '../../components/questions/question-types/question-types-slider/question-types-slider.component';
import TypesRange from '../../components/questions/question-types/question-types-range/question-types-range.component';
import TypesTrueFalse from '../../components/questions/question-types/question-types-trueFalse/question-types-trueFalse.component';
import TypesText from '../../components/questions/question-types/question-types-text/question-types-text.component';
import TypesOptions from '../../components/questions/question-types/question-types-options/question-types-options.component';
import TypesDate from '../../components/questions/question-types/question-types-date/question-types-date.component';

import QuestionsBar from '../../components/questions/questions-bar/questions-bar.component';

import { UserContext } from '../../context/userContext';
import { withRouter } from 'react-router-dom';

class QuestionsPage extends React.Component {
  level = 0;
  history = null;

  nextQuestionId = '';

  constructor(props) {
    super(props);

    this.history = props.history;
    this.level = Number(props.match.params.level);
  }
  static contextType = UserContext;
  state = {
    testResults: [],
    totalExp: 0,
    totalFreeTimePoint: 0,
    totalHealthPoint: 0,
    totalSchoolPoint: 0,
    totalSocialLifePoint: 0,
    answer: null,
    questionLoaded: null,
    questionIdArray: [],
    questionsInLevel: null,
    startQuestionId: null,
    acceptButtonActive: false,
    nextButtonActive: false,
    backButtonActive: false,
    currentIndexInQuestionIdArray: 0,
  };

  componentDidMount() {
    this.context.setUpUserTestResults();
    this.setState(
      {
        testResults: this.context.userTestResults.testResults,
        totalExp: this.context.userTestResults.totalExp || 0,
        totalFreeTimePoint: this.context.userTestResults.totalFreeTimePoint || 0,
        totalHealthPoint: this.context.userTestResults.totalHealthPoint || 0,
        totalSchoolPoint: this.context.userTestResults.totalSchoolPoint || 0,
        totalSocialLifePoint: this.context.userTestResults.totalSocialLifePoint || 0,
        questionsInLevel: this.context.userTestResults.testResults.find(item => item.level === Number(this.level)),
        currentIndexInQuestionIdArray: 0,
      },
      () => {
        this.setState(
          {
            questionIdArray: this.state.questionsInLevel.questionIdArray,
            startQuestionId: this.state.questionsInLevel.startQuestionId,
          },
          () => {
            this.onActiveBackButton(this.state.currentIndexInQuestionIdArray);
            this.setState(
              {
                questionLoaded: this.getQuestion(this.state.questionsInLevel, this.state.startQuestionId),
              },
              () => {
                this.setState({ answer: this.state.questionLoaded.answer });
                if (this.state.questionsInLevel.status === 'done') {
                  this.setState({ currentIndexInQuestionIdArray: 0, nextButtonActive: true, acceptButtonActive: false });
                } else {
                  if (this.state.questionIdArray.length > 0) {
                    this.setState({
                      currentIndexInQuestionIdArray: this.state.questionIdArray.length - 1,
                      backButtonActive: true,
                    });
                  }
                }
              }
            );
          }
        );
      }
    );
  }

  // handle next button in question-bars
  onActiveNextButton = answer => {
    if (answer) {
      this.setState({ nextButtonActive: true });
    } else {
      this.setState({ nextButtonActive: false });
    }
  };

  // handle back button in question-bars
  onActiveBackButton = questionIdArray => {
    if (questionIdArray && questionIdArray.length > 0) {
      this.setState({ backButtonActive: true });
    } else {
      this.setState({ backButtonActive: false });
    }
  };

  // handle accept button
  onActiveAcceptButton = answer => {
    if (answer && answer > '0') {
      this.setState({ acceptButtonActive: true });
    } else {
      this.setState({ acceptButtonActive: false });
    }
  };

  // handle change of all question types components
  answerOptions = [0, 0, 0, 0];
  handleChange = e => {
    const type = e.target.type;

    if (type === 'checkbox') {
      e.target.checked
        ? (this.answerOptions[Number(e.target.value) - 1] = Number(e.target.value))
        : (this.answerOptions[Number(e.target.value) - 1] = 0);
      this.setState(
        {
          answer: this.answerOptions,
        },
        () => {
          this.onActiveAcceptButton(this.state.answer);
        }
      );
    } else {
      this.setState(
        {
          answer: e.target.value,
        },
        () => {
          this.onActiveAcceptButton(this.state.answer);
        }
      );
    }
  };

  // get questionLoaded
  getQuestion = (questionInLevel, questionId) => {
    return questionInLevel.questions.find(question => question.id === questionId);
  };

  // get start question id
  getStartQuestionId = questionInLevel => {
    return questionInLevel.startQuestionId;
  };

  // get next question ID
  getNextQuestionId = question => {
    if (question) {
      const type = question.type;
      let condition = question.nextQuestion.condition;
      switch (type) {
        case QUESTION_TYPE.slider:
          if (condition) {
            condition = parseInt(condition);
            const answerSlide = parseInt(this.state.answer);
            if (answerSlide < condition && question.nextQuestion.nextQuestionId) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.range:
          if (condition) {
            condition = parseInt(condition);
            const answerRange = parseInt(this.state.answer);
            if (answerRange <= condition && question.nextQuestion.nextQuestionId) {
              return question.nextQuestion.nextQuestionId;
            }
            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.trueFalse:
          if (condition) {
            const answerTrueFalse = this.state.answer;
            if (answerTrueFalse === condition && question.nextQuestion.nextQuestionId) {
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
            const answerOptions = this.state.answer.filter(item => item > 0);
            if (condition <= answerOptions.length && question.nextQuestion.nextQuestionId) {
              return question.nextQuestion.nextQuestionId;
            }

            return question.nextQuestion.defaultNextQuestion;
          }
          break;
        case QUESTION_TYPE.date:
          return question.nextQuestion.defaultNextQuestion;
        default:
          return;
      }
    }
  };

  // get and show the next question
  nextQuestion = () => {
    if (this.state.currentIndexInQuestionIdArray < this.state.questionIdArray.length - 1) {
      this.setState(
        {
          currentIndexInQuestionIdArray: this.state.currentIndexInQuestionIdArray + 1,
        },
        () => {
          this.setState(
            {
              questionLoaded: this.getQuestion(
                this.state.questionsInLevel,
                this.state.questionIdArray[this.state.currentIndexInQuestionIdArray]
              ),
            },
            () => {
              if (this.state.questionLoaded.answer) {
                this.setState({
                  answer: this.state.questionLoaded.answer,
                  backButtonActive: true,
                });
              }
            }
          );
        }
      );
    } else {
      this.setState({
        questionLoaded: this.getQuestion(this.state.questionsInLevel, this.nextQuestionId),
        nextButtonActive: false,
      });
      if (this.state.questionsInLevel.status === 'done') {
        this.history.push('/tests-done');
      }
    }
  };

  // get and show prev question
  prevQuestion = () => {
    if (this.state.currentIndexInQuestionIdArray > 0) {
      this.setState(
        {
          currentIndexInQuestionIdArray: this.state.currentIndexInQuestionIdArray - 1,
        },
        () => {
          if (this.state.currentIndexInQuestionIdArray === 0) {
            this.setState({ backButtonActive: false });
          } else {
            this.setState({ backButtonActive: true });
          }
          this.setState(
            {
              questionLoaded: this.getQuestion(
                this.state.questionsInLevel,
                this.state.questionIdArray[this.state.currentIndexInQuestionIdArray]
              ),
              nextButtonActive: true,
            },
            () => {
              if (this.state.questionLoaded.answer) {
                this.setState({
                  answer: this.state.questionLoaded.answer,
                });
              }
            }
          );
        }
      );
    } else {
      this.setState({
        backButtonActive: false,
      });
    }
  };

  // accept the answer and save it to db
  onAcceptAnswer = () => {
    let tempQuestionIdArray = [];
    if (this.state.questionIdArray[this.state.currentIndexInQuestionIdArray] === this.state.questionLoaded.id) {
      tempQuestionIdArray = this.state.questionIdArray.slice(0, this.state.currentIndexInQuestionIdArray + 1);
      this.state.questionsInLevel.questionIdArray = [...tempQuestionIdArray];
    } else {
      tempQuestionIdArray = this.state.questionIdArray;
      this.state.questionsInLevel.questionIdArray = [...this.state.questionIdArray, this.state.questionLoaded.id];
    }

    this.nextQuestionId = this.getNextQuestionId(this.state.questionLoaded);
    this.addTheAnswerAndPoints();
    this.state.questionsInLevel.startQuestionId = this.nextQuestionId;

    this.setState(
      {
        questionIdArray: [...this.state.questionsInLevel.questionIdArray],
        questionLoaded: this.getQuestion(this.state.questionsInLevel, this.nextQuestionId),
        answer: null,
        questionInLevel: this.state.questionsInLevel,
        acceptButtonActive: false,
      },
      () => {
        this.setState({ currentIndexInQuestionIdArray: this.state.questionIdArray.length });
        this.onActiveBackButton(this.state.questionIdArray);
        if (this.state.questionsInLevel.questionIdArray.length === this.state.questionsInLevel.numberOfQuestion) {
          this.state.questionsInLevel.status = 'done';
          this.state.questionsInLevel.startQuestionId = this.state.questionIdArray[0];
          const openNextLevel = this.state.testResults.find(item => item.level === this.level + 1);
          openNextLevel.status = '0';
          this.syncStorage();
          this.history.push('/tests-done');
        } else {
          this.state.questionsInLevel.status = '0';
          this.syncStorage();
        }
      }
    );
  };

  // and the answer and exp point when user click next button
  addTheAnswerAndPoints = () => {
    this.state.questionLoaded.answer = this.state.answer;
    this.addCategory(this.state.questionLoaded.category);

    this.setState(
      {
        totalExp: this.state.totalExp + 1,
      },
      () => {
        this.syncStorage();
      }
    );
  };

  // remove the answer and exp point when user click prev button
  removeTheAnswerAndPoints = () => {
    this.subCategory(this.state.questionLoaded.category);
    this.setState(
      {
        totalExp: this.state.totalExp - 1,
      },
      () => {
        this.syncStorage();
      }
    );
  };

  // save data to localstore with key=userId
  syncStorage = () => {
    const userTestResults = {
      testResults: this.state.testResults,
      totalExp: this.state.totalExp || 0,
      totalFreeTimePoint: this.state.totalFreeTimePoint || 0,
      totalHealthPoint: this.state.totalHealthPoint || 0,
      totalSchoolPoint: this.state.totalSchoolPoint || 0,
      totalSocialLifePoint: this.state.totalSocialLifePoint || 0,
    };
    localStorage.setItem(this.context.user.id, JSON.stringify(userTestResults));
  };

  // add 1 point to category point if the question have category type
  addCategory = category => {
    switch (category) {
      case 'school':
        this.setState({ totalSchoolPoint: this.state.totalSchoolPoint + 1 });
        break;
      case 'free time':
        this.setState({ totalFreeTimePoint: this.state.totalFreeTimePoint + 1 });
        break;
      case 'health':
        this.setState({ totalHealthPoint: this.state.totalHealthPoint + 1 });
        break;
      case 'social life':
        this.setState({ totalSocialLifePoint: this.state.totalSocialLifePoint + 1 });
        break;
      default:
        break;
    }
  };

  // sub 1 point to category point if user back question
  subCategory = category => {
    switch (category) {
      case 'school':
        this.setState({ totalSchoolPoint: this.state.totalSchoolPoint - 1 });
        break;
      case 'free time':
        this.setState({ totalFreeTimePoint: this.state.totalFreeTimePoint - 1 });
        break;
      case 'health':
        this.setState({ totalHealthPoint: this.state.totalHealthPoint - 1 });
        break;
      case 'social life':
        this.setState({ totalSocialLifePoint: this.state.totalSocialLifePoint - 1 });
        break;
      default:
        break;
    }
  };

  render() {
    // console.log(this.state.questionIdArray, this.state.currentIndexInQuestionIdArray);

    return (
      <div className="questions-page">
        {/* <QuestionsContent question={questionLoaded} /> */}
        <div className="questions-content">
          <p>{this.state.questionLoaded && this.state.questionLoaded.questions.content}</p>
          {this.state.questionLoaded && this.state.questionLoaded.type === 'slider' ? (
            <TypesSlider handleChange={this.handleChange} answer={this.state.answer} />
          ) : null}
          {this.state.questionLoaded && this.state.questionLoaded.type === 'range' ? (
            <TypesRange handleChange={this.handleChange} answer={this.state.answer} />
          ) : null}
          {this.state.questionLoaded && this.state.questionLoaded.type === 'trueFalse' ? (
            <TypesTrueFalse handleChange={this.handleChange} answer={this.state.answer} />
          ) : null}
          {this.state.questionLoaded && this.state.questionLoaded.type === 'text' ? (
            <TypesText handleChange={this.handleChange} answer={this.state.answer} />
          ) : null}
          {this.state.questionLoaded && this.state.questionLoaded.type === 'options' ? (
            <TypesOptions
              handleChange={this.handleChange}
              answer={this.state.answer}
              options={this.state.questionLoaded.questions.withOptions}
            />
          ) : null}
          {this.state.questionLoaded && this.state.questionLoaded.type === 'date' ? (
            <TypesDate handleChange={this.handleChange} answer={this.state.answer} />
          ) : null}
        </div>
        {this.state.acceptButtonActive ? (
          <button className="questions-page-accept-btn questions-page-accept-btn--active" onClick={this.onAcceptAnswer}>
            Accept
          </button>
        ) : (
          <button className="questions-page-accept-btn">Accept</button>
        )}
        <QuestionsBar
          nextQuestion={this.nextQuestion}
          prevQuestion={this.prevQuestion}
          nextButtonActive={this.state.nextButtonActive}
          backButtonActive={this.state.backButtonActive}
          numberOfQuestion={this.state.questionsInLevel && this.state.questionsInLevel.numberOfQuestion}
          numberOfAnswer={this.state.questionIdArray && this.state.questionIdArray.length}
          currentIndexInQuestionIdArray={this.state.currentIndexInQuestionIdArray}
        />
      </div>
    );
  }
}

export default withRouter(QuestionsPage);
