import { useEffect, useRef, useState } from "react";
import {
	Button,
	LobbyContent,
	LobbyContentButtonsContainer,
	LobbyContentContainer,
	LobbyContentMainContainer,
	LobbyContentMainPanel,
} from "../styles/styles";
import Paginate from "./Paginate";
import ServerListing from "./ServerListing";
import socket from "./socket";

import type { Game } from "../interfaces";

const LobbyContentSide = () => {
	const isMounted = useRef(false);
	const [games, setGames] = useState<Game[]>([]);
	useEffect(() => {
		if (!isMounted.current) {
			socket.on("connect", () => {
				socket.on("receiveListings", (games: Game[]) => {
					setGames(games);
					console.log(games);
				});

				socket.emit("getListings");
			});

			isMounted.current = true;
			return () => {
				socket.off("receiveListings");
			};
		}
	}, []);

	return (
		<LobbyContent>
			<LobbyContentContainer>
				<LobbyContentMainContainer>
					<LobbyContentMainPanel>
						{games.map((game) => (
							<ServerListing
								key={game.gameID}
								name="Tic Tac Toe game"
								players={game.players.length}
								allowedPlayers={game.maxPlayers}
								gameID={game.gameID}
							/>
						))}
					</LobbyContentMainPanel>
					<Paginate />
				</LobbyContentMainContainer>
				<LobbyContentButtonsContainer>
					<Button>Create</Button>
					<Button>Join with ID</Button>
				</LobbyContentButtonsContainer>
			</LobbyContentContainer>
		</LobbyContent>
	);
};

export default LobbyContentSide;
