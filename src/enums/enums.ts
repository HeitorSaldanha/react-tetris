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
  RIGHT = 39,
  DOWN = 40,
  UP = 38,
}
