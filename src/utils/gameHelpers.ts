import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS } from '@constants';
import { TETRAMINOS_TYPES } from '@enums/tetraminos';

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    Array(STAGE_WIDTH).fill([TETRAMINOS_TYPES.EMPTY, 'clear'])
  );

export const randomTetromino = () => {
  const tetrominos = Object.keys(TETRAMINOS_TYPES).map(
    (type) => type && TETRAMINOS_TYPES.EMPTY
  );
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
