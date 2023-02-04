import { Tetromino } from '@types';
import { TETROMINO_TYPE, CELL_CONTENT } from '@enums';

// Stage settings

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const ROWPOINTS = [40, 100, 300, 1200];
const INITIAL_Y = 0;
export const INITIAL_POS = {
  x: STAGE_WIDTH / 2 - 2,
  y: INITIAL_Y,
};
export const INITIAL_DROPTIME = 1000;
export const LEVEL_DIFFICULTY_INCREMENT = 10;

// Tetrominos characteristics

const EMPTY_TETR: Tetromino = {
  [TETROMINO_TYPE.EMPTY]: { shape: [[CELL_CONTENT.EMPTY]], color: '0, 0, 0' },
};

const I_TETR: Tetromino = {
  [TETROMINO_TYPE.I]: {
    shape: [
      [
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.BRICK,
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.EMPTY,
      ],
      [
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.BRICK,
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.EMPTY,
      ],
      [
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.BRICK,
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.EMPTY,
      ],
      [
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.BRICK,
        CELL_CONTENT.EMPTY,
        CELL_CONTENT.EMPTY,
      ],
    ],
    color: '80, 227, 230',
  },
};

const J_TETR: Tetromino = {
  [TETROMINO_TYPE.J]: {
    shape: [
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
      [CELL_CONTENT.BRICK, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
    ],
    color: '36, 95, 223',
  },
};

const L_TETR: Tetromino = {
  [TETROMINO_TYPE.L]: {
    shape: [
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.BRICK],
    ],
    color: '223, 173, 36',
  },
};

const O_TETR: Tetromino = {
  [TETROMINO_TYPE.O]: {
    shape: [
      [CELL_CONTENT.BRICK, CELL_CONTENT.BRICK],
      [CELL_CONTENT.BRICK, CELL_CONTENT.BRICK],
    ],
    color: '223, 217, 36',
  },
};

const S_TETR: Tetromino = {
  [TETROMINO_TYPE.S]: {
    shape: [
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.BRICK],
      [CELL_CONTENT.BRICK, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
      [CELL_CONTENT.EMPTY, CELL_CONTENT.EMPTY, CELL_CONTENT.EMPTY],
    ],
    color: '48, 211, 56',
  },
};

const T_TETR: Tetromino = {
  [TETROMINO_TYPE.T]: {
    shape: [
      [CELL_CONTENT.EMPTY, CELL_CONTENT.EMPTY, CELL_CONTENT.EMPTY],
      [CELL_CONTENT.BRICK, CELL_CONTENT.BRICK, CELL_CONTENT.BRICK],
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
    ],
    color: '132, 61, 198',
  },
};

const Z_TETR: Tetromino = {
  [TETROMINO_TYPE.Z]: {
    shape: [
      [CELL_CONTENT.BRICK, CELL_CONTENT.BRICK, CELL_CONTENT.EMPTY],
      [CELL_CONTENT.EMPTY, CELL_CONTENT.BRICK, CELL_CONTENT.BRICK],
      [CELL_CONTENT.EMPTY, CELL_CONTENT.EMPTY, CELL_CONTENT.EMPTY],
    ],
    color: '227, 78, 78',
  },
};

export const TETROMINOS: Tetromino = {
  ...EMPTY_TETR,
  ...I_TETR,
  ...J_TETR,
  ...L_TETR,
  ...O_TETR,
  ...S_TETR,
  ...T_TETR,
  ...Z_TETR,
};
