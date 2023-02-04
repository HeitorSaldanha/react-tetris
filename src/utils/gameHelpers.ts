import { TETROMINO_TYPE, CELL_TYPE, CELL_CONTENT } from '@enums';
import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS } from '@constants';

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    Array(STAGE_WIDTH).fill([
      CELL_CONTENT.EMPTY,
      CELL_TYPE.CLEAR,
      TETROMINO_TYPE.EMPTY,
    ])
  );

export const randomTetromino = () => {
  const validTetrominos = Object.values(TETROMINO_TYPE).filter(
    (type) => type !== TETROMINO_TYPE.EMPTY
  );
  const newTetromino =
    validTetrominos[Math.floor(Math.random() * validTetrominos.length)];
  return { type: newTetromino, ...TETROMINOS[newTetromino] };
};
