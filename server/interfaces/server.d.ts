export interface Game {
  gameID: string;
  players: Player[];
  state: string[][];
  currentTurn: string;
}

export interface Player {
  playerID: string;
  name: string;
  inGame?: boolean;
}

export interface GamesManager {
  [propName: string]: Game;
}
