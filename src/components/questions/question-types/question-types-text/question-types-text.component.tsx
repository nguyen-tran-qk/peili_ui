import React from 'react';
import './question-types-text.styles.scss';

const TypesText = () => {
  return (
    <div className="question-types-text">
      <textarea
        name="types-text"
        id="types-text"
        cols={30}
        rows={10}
        placeholder="Enter the content"
        className="question-types-text-input"
      />
    </div>
  );
};

export default TypesText;
