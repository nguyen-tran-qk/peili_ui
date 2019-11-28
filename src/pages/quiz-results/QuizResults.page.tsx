import React from 'react';
import { XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, FlexibleWidthXYPlot, makeWidthFlexible, RadialChart } from 'react-vis';
import './quiz-results.scss';

const sportsData = [
  { x: 'Football', y: 89 },
  { x: 'Surfing', y: 42 },
  { x: 'Golf', y: 14 },
  { x: 'Baseball', y: 27 },
  { x: 'Skateboarding', y: 69 },
  { x: 'Cycling', y: 53 },
];

const moodData = [
  { angle: 12, label: 'Happy', color: '#26c6da' },
  { angle: 5, label: 'Sad', color: '#673ab7' },
  { angle: 11, label: 'Motivated/Energetic', color: '#009688' },
  { angle: 9, label: 'Angry', color: '#ffeb3b' },
  { angle: 20, label: 'Exhausted', color: '#b0bec5' },
  { angle: 7, label: 'Anxious/Worried', color: '#ef5350' },
  { angle: 14, label: 'Depressed', color: '#1a237e' },
  { angle: 22, label: 'In love', color: '#f4511e' },
];

const FlexibleWidthRadialChart = makeWidthFlexible(RadialChart);

const QuizResults = () => {
  return (
    <div className="quiz-results">
      <div className="quiz-results-header">Level 1</div>
      <div className="question-results-card">
        <label>Question 1</label>
        <p className="question-text">Which of these outdoor sports do you feel like playing most?</p>
        <div className="your-answer">
          <b>Your answer: </b>Base ball; Football
        </div>
        <div className="results-visual">
          <FlexibleWidthXYPlot xType="ordinal" height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={sportsData} />
          </FlexibleWidthXYPlot>
        </div>
      </div>
      <div className="question-results-card">
        <label>Question 2</label>
        <p className="question-text">What is the most accurate description of your mood so far this week?</p>
        <div className="your-answer">
          <b>Your answer: </b>Exhausted
        </div>
        <div className="results-visual">
          <FlexibleWidthRadialChart height={300} data={moodData} colorType="literal" />
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
