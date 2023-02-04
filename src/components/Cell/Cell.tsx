import React from 'react';

import { StyledCell } from './Cell.styles';

import { TETROMINOS } from '../../constants/constants';
import { TETROMINO_TYPE, CELL_CONTENT } from '@enums';

interface props {
  content: CELL_CONTENT;
  tetrominoType: TETROMINO_TYPE;
}

const Cell: React.FC<props> = ({ content, tetrominoType }) => (
  <StyledCell content={content} color={TETROMINOS[tetrominoType].color} />
);

export default React.memo(Cell);
