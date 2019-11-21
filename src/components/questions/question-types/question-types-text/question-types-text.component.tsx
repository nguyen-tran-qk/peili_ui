import React, { useContext } from 'react';
import './question-types-text.styles.scss';
import { UserContext } from '../../../../context/userContext';

const TypesText = () => {
  const { setAnswerText } = useContext(UserContext);
  return (
    <div className="question-types-text">
      <textarea
        name="types-text"
        id="types-text"
        cols={30}
        rows={10}
        placeholder="Enter the content"
        className="question-types-text-input"
        onChange={e => setAnswerText(e.target.value)}
      />
    </div>
  );
};

export default TypesText;
