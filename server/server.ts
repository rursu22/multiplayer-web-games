import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

import { GamesManager, Game, Player } from "./interfaces/server";
import { generateID } from "./logic/serverLogic";
import { checkWinner } from "./logic/ticTacToeLogic";

const PORT = 3000;

let games: Game[] = [];

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
	cors: { origin: "http://localhost:5173" },
});

app.get("/create", (req, res) => {
	let game: Game = {
		gameID: "",
		state: [
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
		maxPlayers: 2,
		currentTurn: "X",
		players: [],
	};
	game.gameID = generateID();

	games.push(game);

	console.log(`Created game ${game.gameID}`);
	console.log(`Games running: ${Object.keys(games).join(",")}`);
	io.emit("receiveListings", games);
	res.json({ gameID: game.gameID });
});

io.on("connection", (socket) => {
	console.log(socket.id);

	socket.on("getListings", () => {
		console.log(games);
		socket.emit("receiveListings", games);
	});
});

server.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});
