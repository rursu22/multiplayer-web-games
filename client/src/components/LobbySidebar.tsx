import {
	LobbySidebarContainer,
	LobbySidebarGameList,
	LobbySidebarTitle,
} from "../styles/styles";
import LobbySidebarItem from "./LobbySidebarItem";

const LobbySidebar = (props: any) => {
	return (
		<LobbySidebarContainer>
			<LobbySidebarTitle> Games List</LobbySidebarTitle>
			<LobbySidebarGameList>
				<LobbySidebarItem src="tictactoe.svg">
					Tic Tac Toe
				</LobbySidebarItem>
				<LobbySidebarItem src="crazy8s.svg">Crazy 8s</LobbySidebarItem>
				<LobbySidebarItem src="chess.svg">Chess</LobbySidebarItem>
			</LobbySidebarGameList>
		</LobbySidebarContainer>
	);
};

export default LobbySidebar;
