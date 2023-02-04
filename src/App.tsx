import React, { useState, useRef } from 'react';

import { Stage } from '@components/Stage';
import { Display } from '@components/Display';
import { StartButton } from '@components/StartButton';

import { useStage } from '@hooks/useStage';
import { usePlayer } from '@hooks/usePlayer';
import { useInterval } from '@hooks/useInterval';
import { useCollision } from '@hooks/useCollision';
import { useGameStatus } from '@hooks/useGameStatus';

import { createStage } from '@utils/gameHelpers';

import { PLAYER_DIRECTION, MOVE_DISTANCE } from '@enums';
import { INITIAL_DROPTIME, LEVEL_DIFFICULTY_INCREMENT } from '@constants';

import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const ScoreDisplay: React.FC<{
  score: number;
  rows: number;
  level: number;
}> = ({ score, rows, level }) => (
  <>
    <Display text={`Score: ${score}`} />
    <Display text={`Rows: ${rows}`} />
    <Display text={`Level: ${level}`} />
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

  const { player, rotatePlayer, updatePlayerPos, resetPlayer } = usePlayer();
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer);
  const { score, setScore, rows, setRows, level, setLevel } =
    useGameStatus(rowsCleared);

  const isColliding = useCollision();

  const movePlayer = (direction: number) => {
    if (!isColliding(player, stage, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0, collided: false });
    }
  };

  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (!gameOver) {
      if (keyCode === PLAYER_DIRECTION.LEFT) {
        movePlayer(MOVE_DISTANCE.LEFT);
      } else if (keyCode === PLAYER_DIRECTION.RIGHT) {
        movePlayer(MOVE_DISTANCE.RIGHT);
      } else if (keyCode === PLAYER_DIRECTION.DOWN) {
        if (repeat) return;
        setDroptime(MOVE_DISTANCE.DOWN);
      } else if (keyCode === PLAYER_DIRECTION.UP) {
        rotatePlayer(stage);
      }
    }
  };

  const handleKeyUp = ({ keyCode }: { keyCode: number }): void => {
    if (!gameOver) {
      if (keyCode === PLAYER_DIRECTION.DOWN) {
        setDroptime(1000 / level + 200);
      }
    }
  };

  const handleStartGame = (): void => {
    if (gameArea.current) {
      gameArea.current.focus();
    }

    setStage(createStage());
    setDroptime(INITIAL_DROPTIME);
    resetPlayer();
    setScore(0);
    setLevel(1);
    setRows(1);
    setGameOver(false);
  };

  const drop = (): void => {
    if (rows > level * LEVEL_DIFFICULTY_INCREMENT) {
      setLevel(level + 1);
      setDroptime(1000 / level + 200);
    }
    if (!isColliding(player, stage, { x: 0, y: MOVE_DISTANCE.DROP })) {
      updatePlayerPos({ x: 0, y: MOVE_DISTANCE.DROP, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDroptime(0);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  useInterval(() => {
    if (!gameOver) {
      drop();
    }
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
            <ScoreDisplay score={score} rows={rows} level={level} />
          )}
        </div>
        <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
