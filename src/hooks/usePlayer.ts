import { useState, useCallback } from 'react';

import { TETROMINO_TYPE } from '@enums';
import { INITIAL_POS, TETROMINOS } from '@constants';
import { randomTetromino } from '@utils/gameHelpers';
import { Stage, Player, TetrominoShape } from '@types';
import { useCollision } from './useCollision';

type UsePlayer = () => {
  player: Player;
  updatePlayerPos: ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }) => void;
  resetPlayer: () => void;
  rotatePlayer: (stage: Stage) => void;
};

export const usePlayer: UsePlayer = () => {
  const [player, setPlayer] = useState({
    pos: {
      x: 0,
      y: 0,
    },
    tetromino: { shape: TETROMINOS?.EMPTY?.shape, type: TETROMINO_TYPE.EMPTY },
    collided: false,
  });
  const isColliding = useCollision();

  const rotate = (matrix: TetrominoShape) => {
    const mtrx = matrix.map((_, i: number) =>
      matrix.map((column) => column[i])
    );
    return mtrx.map((row) => row.reverse());
  };

  const rotatePlayer = (stage: Stage): void => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino.shape = rotate(clonedPlayer.tetromino.shape);
    const posX = clonedPlayer.pos.x;
    let offset = 1;
    while (isColliding(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino.shape[0].length) {
        clonedPlayer.pos.x = posX;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((prev) => ({
      ...prev,
      pos: {
        x: (prev.pos.x += x),
        y: (prev.pos.y += y),
      },
      collided,
    }));
  };

  const resetPlayer = useCallback((): void => {
    const newTetromino = randomTetromino();
    console.log(INITIAL_POS);
    setPlayer({
      pos: { ...INITIAL_POS },
      tetromino: {
        shape: newTetromino.shape,
        type: newTetromino.type as TETROMINO_TYPE,
      },
      collided: false,
    });
  }, []);

  return { player, rotatePlayer, updatePlayerPos, resetPlayer };
};
