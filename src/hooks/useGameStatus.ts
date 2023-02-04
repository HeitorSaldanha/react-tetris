import React, { useState, useEffect } from 'react';
import { ROWPOINTS } from '@constants';

export const useGameStatus = (
  rowsCleared: number
): {
  score: number;
  setScore: (score: number) => void;
  rows: number;
  setRows: (rows: number) => void;
  level: number;
  setLevel: (level: number) => void;
} => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (rowsCleared > 0) {
      setScore((prev) => prev + ROWPOINTS[rowsCleared - 1] * level);
      setRows((prev) => prev + rowsCleared);
    }
  }, [rowsCleared]);

  return { score, setScore, rows, setRows, level, setLevel };
};
