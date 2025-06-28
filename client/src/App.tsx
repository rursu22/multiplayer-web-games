import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import Lobby from "./components/Lobby";
import CreateGame from "./components/CreateGame";
import TicTacToe from "./components/TicTacToe";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/lobby" element={<Lobby />} />
				<Route path="/create" element={<CreateGame />} />
				<Route path="/game/:gameID" element={<TicTacToe />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
