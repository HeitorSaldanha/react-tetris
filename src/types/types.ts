import { TETROMINO_TYPE, CELL_CONTENT, CELL_TYPE } from '@enums';

export type TetrominoShape = CELL_CONTENT[][];

export interface Tetromino {
  [key: string]: {
    shape: TetrominoShape;
    color: string;
  };
}

export type StageCell = [CELL_CONTENT, CELL_TYPE, TETROMINO_TYPE];

export type Stage = StageCell[][];

export interface Player {
  pos: {
    x: number;
    y: number;
  };
  tetromino: { shape: TetrominoShape; type: TETROMINO_TYPE };
  collided: boolean;
}
