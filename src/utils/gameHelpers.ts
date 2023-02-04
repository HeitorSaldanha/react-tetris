import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS } from '@constants';
import { TETROMINO_TYPE, CELL_TYPE, CELL_CONTENT } from '@enums';

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    Array(STAGE_WIDTH).fill([
      CELL_CONTENT.EMPTY,
      CELL_TYPE.CLEAR,
      TETROMINO_TYPE.EMPTY,
    ])
  );

export const randomTetromino = () => {
  const tetrominos = Object.keys(TETROMINO_TYPE).map(
    (type) => (type as TETROMINO_TYPE) && TETROMINO_TYPE.EMPTY
  );
  const newTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return { type: newTetromino, ...TETROMINOS[newTetromino] };
};
