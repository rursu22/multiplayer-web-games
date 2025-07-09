import {
	AppContainer,
	Button,
	LobbyContainer,
	LobbyContent,
	LobbyContentButtonsContainer,
	LobbyContentContainer,
	LobbyContentMainContainer,
	LobbyContentMainPanel,
} from "../styles/styles";

import LobbySidebar from "./LobbySidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paginate from "./Paginate";
import LobbyContentSide from "./LobbyContent";

const Lobby = (props: any) => {
	return (
		<AppContainer>
			<LobbyContainer>
				<LobbySidebar></LobbySidebar>
				<LobbyContentSide />
			</LobbyContainer>
		</AppContainer>
	);
};

export default Lobby;
