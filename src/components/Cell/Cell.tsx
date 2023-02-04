import React from 'react';

import { StyledCell } from './Cell.styles';

import { TETROMINOS } from '../../constants/constants';
import { TETRAMINOS_TYPES } from '@enums/tetraminos';

interface props {
  type: TETRAMINOS_TYPES;
}

const Cell: React.FC<props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell);
