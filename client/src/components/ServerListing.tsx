import {
	Button,
	ServerListingContainer,
	ServerListingName,
	ServerListingFlexContainer,
	ServerListingPlayers,
	ServerListingID,
} from "../styles/styles";

const ServerListing = (props: any) => {
	return (
		<ServerListingContainer>
			<ServerListingFlexContainer>
				<ServerListingID>{props.gameID}</ServerListingID>
			</ServerListingFlexContainer>
			<ServerListingFlexContainer>
				<ServerListingName> {props.name}</ServerListingName>
			</ServerListingFlexContainer>

			<ServerListingFlexContainer>
				<ServerListingPlayers>
					{props.players} / {props.allowedPlayers}
				</ServerListingPlayers>
			</ServerListingFlexContainer>

			<ServerListingFlexContainer>
				<Button> Connect</Button>
			</ServerListingFlexContainer>
		</ServerListingContainer>
	);
};

export default ServerListing;
