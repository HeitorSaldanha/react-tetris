import React, { useState } from 'react';

import { Stage } from '@components/Stage';
import { Display } from '@components/Display';
import { StartButton } from '@components/StartButton';
import { createStage } from '@utils/gameHelpers';

import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const ScoreDisplay: React.FC = () => (
  <>
    <Display text="Score: " />
    <Display text="Rows: " />
    <Display text="Level: " />
  </>
);

const GameOver: React.FC = () => (
  <>
    <Display gameOver text="Game Over!" />
    <StartButton callback={() => null} />
  </>
);

const App: React.FC = () => {
  const [droptime, setDroptime] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  return (
    <StyledTetrisWrapper role="button" tabIndex={0}>
      <StyledTetris>
        <div className="display">
          {gameOver ? <GameOver /> : <ScoreDisplay />}
        </div>
        <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
