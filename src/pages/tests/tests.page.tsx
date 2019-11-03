import React from 'react';
import './tests.styles.scss';

import TestLevels from '../../components/test-levels/test-levels.component';

const Tests = () => {
  return (
    <div className="tests">
      <TestLevels level="1" exp="10" status="done" />
      <TestLevels level="2" exp="20" status="processing" />
      <TestLevels level="3" exp="30" status="locked" />
      <TestLevels level="4" exp="40" status="locked" />
      <TestLevels level="5" exp="50" status="locked" />
      <TestLevels level="6" exp="60" status="locked" />
      <TestLevels level="7" exp="70" status="locked" />
      <TestLevels level="8" exp="80" status="locked" />
    </div>
  );
};

export default Tests;
