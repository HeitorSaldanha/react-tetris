import { TETRAMINOS_TYPES } from '@enums/tetraminos';

export interface Tetramino {
  [key: string]: {
    shape: string[][];
    color: string;
  };
}

export type StageCell = [TETRAMINOS_TYPES, string];

export type Stage = StageCell[][];
