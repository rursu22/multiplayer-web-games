export interface Game {
	gameID: string;
	players: Player[];
	maxPlayers: 2;
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
