import React, { useContext } from 'react';
import './tests.styles.scss';

import TestLevels from '../../components/test-levels/test-levels.component';

import { UserContext } from '../../context/userContext';

const Tests = () => {
  const { user, isLoaded } = useContext(UserContext);
  const questions = user.questions;
  return (
    <div className="tests">
      {isLoaded &&
        questions.map((question, index) => {
          return (
            <TestLevels
              level={question.level}
              status={question.status}
              key={index}
              exp={question.totalExp}
              totalQuestions={question.numberOfQuestion}
            />
          );
        })}
    </div>
  );
};

export default Tests;
