import { Player, Stage } from '@types';
import { CELL_TYPE, CELL_CONTENT } from '@enums';

const checkForColision = (
  y: number,
  x: number,
  moveY: number,
  moveX: number,
  playerPos: { x: number; y: number },
  stage: Stage
) => {
  const moveYTarget = stage[y + playerPos.y + moveY];
  if (moveYTarget) {
    const moveXTarget = moveYTarget[x + playerPos.x + moveX];
    if (moveXTarget) {
      const isMovementNotInsideGameHeight = !moveYTarget;
      const isMovementNotInsideGameWidth = !moveXTarget;
      const isMovementTargetMerged = moveXTarget[1] === CELL_TYPE.MERGED;
      return (
        isMovementNotInsideGameHeight ||
        isMovementNotInsideGameWidth ||
        isMovementTargetMerged
      );
    }
  }
  return true;
};

export const useCollision = () => {
  return (
    player: Player,
    stage: Stage,
    { x: moveX, y: moveY }: { x: number; y: number }
  ) => {
    const isTetrominoCell = (y: number, x: number, cellContent: CELL_CONTENT) =>
      cellContent !== CELL_CONTENT.EMPTY;

    for (let y = 0; y < player.tetromino.shape.length; y++) {
      for (let x = 0; x < player.tetromino.shape[y].length; x++) {
        if (isTetrominoCell(y, x, player.tetromino.shape[y][x])) {
          if (checkForColision(y, x, moveY, moveX, player.pos, stage)) {
            return true;
          }
        }
      }
    }

    return false;
  };
};
