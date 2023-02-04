import { useState, useCallback } from 'react';
import { INITIAL_POS, TETROMINOS } from '@constants';
import { randomTetromino } from '@utils/gameHelpers';
import { Player } from '@types';
import { TETROMINO_TYPE } from '@enums';

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
    console.log({ newTetromino });
    setPlayer({
      pos: INITIAL_POS,
      tetromino: {
        shape: newTetromino.shape,
        type: newTetromino.type as TETROMINO_TYPE,
      },
      collided: false,
    });
  }, []);

  return { player, updatePlayerPos, resetPlayer };
};
