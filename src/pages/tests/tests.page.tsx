import React, { useContext } from 'react';
import './tests.styles.scss';

import TestLevels from '../../components/test-levels/test-levels.component';

// import { UserContext } from '../../context/userContext';
import { AuthContext } from '../../context/authContext';

const Tests = () => {
  // const { user, isLoaded } = useContext(UserContext);

  const { userTestResults } = useContext(AuthContext);

  const questions = userTestResults.testResults;
  return (
    <div className="tests">
      {questions &&
        questions.map((question, index) => {
          return (
            <TestLevels
              level={question.level}
              status={question.status}
              key={index}
              exp={question.totalExp}
              doneQuestions={question.questionIdArray.length}
              totalQuestions={question.numberOfQuestion}
            />
          );
        })}
    </div>
  );
};

export default Tests;
