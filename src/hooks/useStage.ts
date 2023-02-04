import { useState, useEffect } from 'react';
import { createStage } from '@utils/gameHelpers';
import { Player, StageCell, Stage } from '@types';
import { TETROMINO_TYPE, CELL_CONTENT, CELL_TYPE } from '@enums';
import { STAGE_WIDTH } from '@constants';

type UpdateStage = (prevStage: Stage) => Stage;

type UseStage = (
  player: Player,
  resetPlayer: () => void
) => { stage: Stage; setStage: (stage: Stage) => void; rowsCleared: number };

export const useStage: UseStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    if (player.pos) {
      setRowsCleared(0);

      const sweepRows = (newStage: Stage): Stage => {
        return newStage.reduce((acc, row) => {
          if (row.findIndex((cell) => cell[0] === CELL_CONTENT.EMPTY) === -1) {
            setRowsCleared((prev) => prev + 1);
            acc.unshift(
              new Array(STAGE_WIDTH).fill([
                CELL_CONTENT.EMPTY,
                CELL_TYPE.CLEAR,
                TETROMINO_TYPE.EMPTY,
              ])
            );
            return acc;
          }
          acc.push(row);
          return acc;
        }, [] as Stage);
      };

      const updateStage: UpdateStage = (prevStage) => {
        const newStage = prevStage.map(
          (row) =>
            row.map((cell) =>
              cell[1] === CELL_TYPE.CLEAR
                ? [CELL_CONTENT.EMPTY, CELL_TYPE.CLEAR, TETROMINO_TYPE.EMPTY]
                : cell
            ) as StageCell[]
        );

        player.tetromino.shape?.forEach((row, y) => {
          row.forEach((content, x) => {
            if (content !== CELL_CONTENT.EMPTY) {
              newStage[y + player.pos.y][x + player.pos.x] = [
                content,
                `${
                  player.collided ? CELL_TYPE.MERGED : CELL_TYPE.CLEAR
                }` as CELL_TYPE,
                player.tetromino.type,
              ];
            }
          });
        });

        if (player.collided) {
          resetPlayer();
          return sweepRows(newStage);
        }

        return newStage;
      };

      setStage((prev) => updateStage(prev));
    }
  }, [
    player.pos,
    player.pos?.x,
    player.pos?.y,
    player.tetromino,
    player.collided,
  ]);

  return { stage, setStage, rowsCleared };
};
