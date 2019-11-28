import React from 'react';
import './question-types-date.styles.scss';

const TypesDate = (props: any) => {
  const { handleChange, answer } = props;

  return (
    <div className="question-types-date">
      <label htmlFor="types-date">Date picker inline</label>
      <input
        type="date"
        name="types-date"
        id="types-date"
        value={answer ? answer : ''}
        className="question-types-date-input"
        onChange={handleChange}
      />
    </div>
  );
};

export default TypesDate;
