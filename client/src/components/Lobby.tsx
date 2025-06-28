import {
	AppContainer,
	Button,
	ConnectButton,
	LobbyContainer,
	LobbyContent,
	LobbyContentButtonsContainer,
	LobbyContentContainer,
	LobbyContentMainPanel,
} from "../styles/styles";

import LobbySidebar from "./LobbySidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paginate from "./Paginate";

const Lobby = (props: any) => {
	return (
		<AppContainer>
			<LobbyContainer>
				<LobbySidebar></LobbySidebar>
				<LobbyContent>
					<LobbyContentContainer>
						<LobbyContentMainPanel></LobbyContentMainPanel>
						<Paginate />
						<LobbyContentButtonsContainer>
							<Button>Create</Button>
							<Button>Join with ID</Button>
						</LobbyContentButtonsContainer>
					</LobbyContentContainer>
				</LobbyContent>
			</LobbyContainer>
		</AppContainer>
	);
};

export default Lobby;
