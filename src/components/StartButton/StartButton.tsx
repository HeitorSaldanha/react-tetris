import React from 'react';
import { StyledStartButton } from './StartButton.styles';

interface props {
  callback: () => void;
}

const StartButton: React.FC<props> = ({ callback }) => (
  <StyledStartButton onClick={() => callback()}>Start Game</StyledStartButton>
);

export default StartButton;
