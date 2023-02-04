import { Tetramino } from '@types';
import { TETRAMINOS_TYPES } from '@enums/tetraminos';

// Stage settings

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const ROWPOINTS = [40, 100, 300, 1200];

// Tetraminos characteristics

const EMPTY_TETR: Tetramino = {
  [TETRAMINOS_TYPES.EMPTY]: { shape: [['']], color: '0, 0, 0' },
};

const I_TETR: Tetramino = {
  [TETRAMINOS_TYPES.I]: {
    shape: [
      ['', 'I', '', ''],
      ['', 'I', '', ''],
      ['', 'I', '', ''],
      ['', 'I', '', ''],
    ],
    color: '80, 227, 230',
  },
};

const J_TETR: Tetramino = {
  [TETRAMINOS_TYPES.J]: {
    shape: [
      ['', 'J', ''],
      ['', 'J', ''],
      ['J', 'J', ''],
    ],
    color: '36, 95, 223',
  },
};

const L_TETR: Tetramino = {
  [TETRAMINOS_TYPES.L]: {
    shape: [
      ['', 'L', ''],
      ['', 'L', ''],
      ['', 'L', 'L'],
    ],
    color: '223, 173, 36',
  },
};

const O_TETR: Tetramino = {
  [TETRAMINOS_TYPES.O]: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: '223, 217, 36',
  },
};

const S_TETR: Tetramino = {
  [TETRAMINOS_TYPES.S]: {
    shape: [
      ['', 'S', 'S'],
      ['S', 'S', ''],
      ['', '', ''],
    ],
    color: '48, 211, 56',
  },
};

const T_TETR: Tetramino = {
  [TETRAMINOS_TYPES.T]: {
    shape: [
      ['', '', ''],
      ['T', 'T', 'T'],
      ['', 'T', ''],
    ],
    color: '132, 61, 198',
  },
};

const Z_TETR: Tetramino = {
  [TETRAMINOS_TYPES.Z]: {
    shape: [
      ['Z', 'Z', ''],
      ['', 'Z', 'Z'],
      ['', '', ''],
    ],
    color: '227, 78, 78',
  },
};

export const TETROMINOS: Tetramino = {
  ...EMPTY_TETR,
  ...I_TETR,
  ...J_TETR,
  ...L_TETR,
  ...O_TETR,
  ...S_TETR,
  ...T_TETR,
  ...Z_TETR,
};
