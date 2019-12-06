import React from 'react';

import './questions-bar-progress.styles.scss';

const QuestionsBarProgress = (props: any) => {
  const { numberOfAnswer, numberOfQuestion, currentIndexInQuestionIdArray } = props;
  const widthPercent = 100 / numberOfQuestion - 2;
  const progessItems = [];
  const style = {
    width: `${widthPercent}%`,
  };

  for (let i = 0; i < numberOfQuestion; i++) {
    if (i < numberOfAnswer) {
      if (i === currentIndexInQuestionIdArray) {
        progessItems.push(
          <div
            className="questions-bar-progress-items questions-bar-progress-items--active questions-bar-progress-items--current"
            key={i}
            style={style}
          />
        );
      } else {
        progessItems.push(<div className="questions-bar-progress-items questions-bar-progress-items--active" key={i} style={style} />);
      }
    } else {
      if (i === currentIndexInQuestionIdArray) {
        progessItems.push(<div className="questions-bar-progress-items questions-bar-progress-items--current" key={i} style={style} />);
      } else {
        progessItems.push(<div className="questions-bar-progress-items" key={i} style={style} />);
      }
    }
  }
  return <div className="questions-bar-progress">{progessItems}</div>;
};

export default QuestionsBarProgress;
