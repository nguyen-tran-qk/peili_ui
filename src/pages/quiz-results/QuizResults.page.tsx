import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
} from 'react-vis';
import './quiz-results.scss';

const greenData = [
  { x: 'A', y: 10 },
  { x: 'B', y: 5 },
  { x: 'C', y: 15 },
];

const blueData = [
  { x: 'A', y: 12 },
  { x: 'B', y: 2 },
  { x: 'C', y: 11 },
];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y),
}));

const QuizResults = () => {
  return (
    <div className="quiz-results">
      <div className="quiz-results-header">Level 1</div>
      <div className="question-results-card">
        <label>Question 1</label>
        <p className="question-text">
          There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.
        </p>
        <div className="your-answer">
          <b>Your answer: </b>5
        </div>
        <div className="results-visual">
          <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries className="vertical-bar-series-example" data={greenData} />
            <VerticalBarSeries data={blueData} />
            <LabelSeries data={labelData} getLabel={d => d.x} />
          </XYPlot>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
