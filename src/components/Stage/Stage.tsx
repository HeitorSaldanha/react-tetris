import React from 'react';
import { Cell } from '@components/Cell';
import { StyledStage } from './Stage.styles';
import { Stage as StageType } from '@types';

interface props {
  stage: StageType;
}

const Stage: React.FC<props> = ({ stage }) => (
  <StyledStage>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
