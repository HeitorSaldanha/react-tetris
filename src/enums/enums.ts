export enum TETROMINO_TYPE {
  EMPTY = 'empty',
  I = 'i',
  J = 'j',
  L = 'l',
  O = 'o',
  S = 's',
  T = 't',
  Z = 'z',
}

export enum CELL_CONTENT {
  EMPTY = 'empty',
  BRICK = 'brick',
}

export enum CELL_TYPE {
  CLEAR = 'clear',
  MERGED = 'merged',
}

export enum PLAYER_DIRECTION {
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40,
}

export enum MOVE_DISTANCE {
  LEFT = -1,
  RIGHT = 1,
  DOWN = 30,
  DROP = 1,
}
