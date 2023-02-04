import { useState, useCallback } from 'react';
import { INITIAL_POS } from '@constants';
import { randomTetromino } from '@utils/gameHelpers';
import { Player } from '@types';

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
  const [player, setPlayer] = useState({} as Player);

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
    setPlayer({
      pos: INITIAL_POS,
      tetromino: { ...newTetromino },
      collided: false,
    });
  }, []);

  return { player, updatePlayerPos, resetPlayer };
};
