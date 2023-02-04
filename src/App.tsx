import React, { useState, useRef } from 'react';

import { Stage } from '@components/Stage';
import { Display } from '@components/Display';
import { StartButton } from '@components/StartButton';

import { useStage } from '@hooks/useStage';
import { usePlayer } from '@hooks/usePlayer';
import { useInterval } from '@hooks/useInterval';

import { createStage } from '@utils/gameHelpers';

import { PLAYER_DIRECTION } from '@enums';
import { INITIAL_DROPTIME } from '@constants';

import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const ScoreDisplay: React.FC = () => (
  <>
    <Display text="Score: " />
    <Display text="Rows: " />
    <Display text="Level: " />
  </>
);

const GameOver: React.FC<{ handleStartGame: () => void }> = ({
  handleStartGame,
}) => (
  <>
    <Display gameOver text="Game Over!" />
    <StartButton callback={handleStartGame} />
  </>
);

const App: React.FC = () => {
  const [droptime, setDroptime] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const gameArea = useRef<HTMLDivElement>(null);

  const { player, updatePlayerPos, resetPlayer } = usePlayer();
  const { stage, setStage } = useStage(player, resetPlayer);

  const movePlayer = (direction: number) => {
    updatePlayerPos({ x: direction, y: 0, collided: false });
  };

  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (keyCode === PLAYER_DIRECTION.LEFT) {
      movePlayer(-1);
    } else if (keyCode === PLAYER_DIRECTION.RIGHT) {
      movePlayer(1);
    } else if (keyCode === PLAYER_DIRECTION.DOWN) {
      if (repeat) return;
      setDroptime(30);
    } else if (keyCode === PLAYER_DIRECTION.UP) {
      // TODO add rotation
    }
  };

  const handleKeyUp = ({ keyCode }: { keyCode: number }): void => {
    if (keyCode === PLAYER_DIRECTION.DOWN) {
      setDroptime(INITIAL_DROPTIME);
    }
  };

  const handleStartGame = (): void => {
    if (gameArea.current) {
      gameArea.current.focus();
    }

    setStage(createStage());
    setDroptime(INITIAL_DROPTIME);
    resetPlayer();
    setGameOver(false);
  };

  const drop = (): void => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  useInterval(() => {
    drop();
  }, droptime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={move}
      onKeyUp={handleKeyUp}
      ref={gameArea}
    >
      <StyledTetris>
        <div className="display">
          {gameOver ? (
            <GameOver handleStartGame={handleStartGame} />
          ) : (
            <ScoreDisplay />
          )}
        </div>
        <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
