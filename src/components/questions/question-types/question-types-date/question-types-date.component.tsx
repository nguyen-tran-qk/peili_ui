import React from 'react';
import './question-types-date.styles.scss';

const TypesDate = () => {
  return (
    <div className="question-types-date">
      <label htmlFor="types-date">Date picker inline</label>
      <input type="date" name="types-date" id="types-date" className="question-types-date-input" />
    </div>
  );
};

export default TypesDate;
