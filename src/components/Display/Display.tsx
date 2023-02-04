import React from 'react';
import { StyledDisplay } from './Display.styles';

interface props {
  gameOver?: boolean;
  text: string;
}

const Display: React.FC<props> = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
