import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const backgroundColor: string = "#1E2A38";
const sectionColor: string = "#	#2B3A4A";
const accentColor: string = "#90e0ef";
const buttonHoverColor: string = "#A15555";
const textColor: string = "#caf0f8";
const containerBorderRadius: string = "25px";

export const AppContainer = styled.div`
	background: #263950;
	background: linear-gradient(
		90deg,
		rgba(38, 57, 80, 1) 0%,
		rgba(26, 37, 49, 1) 100%
	);
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LobbyContainer = styled.div`
	background-color: ${sectionColor};
	position: relative;
	width: 80%;
	height: 80%;
	border-radius: ${containerBorderRadius};
	display: flex;
	flex-flow: row nowrap;

	box-shadow: #6d325144 0px 54px 55px, #6d325144 0px -12px 30px,
		#6d325144 0px 4px 6px, #6d325144 0px 12px 13px, #6d325144 0px -3px 5px;
`;

export const Button = styled.button`
	border: none;
	width: 10em;
	height: 4em;
	border-radius: 10px;
	background-color: ${accentColor};
	font-family: Poppins;
	font-weight: 600;
	color: ${backgroundColor};
	border: 3px solid rgba(0, 0, 0, 0.1);

	&:hover {
		border: 4px solid ${backgroundColor};
	}
`;

export const ConnectButton = styled(Button)``;

export const LobbySidebarContainer = styled.aside`
	position: relative;
	width: 20%;
	height: 100%;
	background-color: #1a222f;
	border-top-left-radius: ${containerBorderRadius};
	border-bottom-left-radius: ${containerBorderRadius};
`;

export const LobbySidebarTitle = styled.h1`
	text-align: center;
	color: ${textColor};
	font-family: "Poppins";
	font-weight: 600;
	font-size: 2rem;
	margin-left: 10%;
	margin-top: 2%;
	width: 80%;
	text-shadow: 2px 2px ${backgroundColor};
`;

export const LobbySidebarGameList = styled.div`
	box-sizing: border-box;
	padding: 5%;
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	width: 90%;
	margin-left: 5%;
	// background-color: rgba(0, 0, 0, 0.1);
	height: 90%;
	border-radius: 10px;
`;

export const LobbySidebarGameListItemContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	width: 100%;
	height: 8%;
	background-color: #1f2b3c;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	margin-bottom: 5%;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
	border-radius: 10px;

	&:hover {
		border: 4px solid ${backgroundColor};
	}
`;

export const LobbySidebarGameListItemName = styled.div`
	position: relative;
	font-family: Poppins;
	font-weight: 600;
	color: ${textColor};
	font-size: 1.2rem;
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-shadow: 2px 2px ${backgroundColor};
`;

export const LobbySidebarGameListItemImageContainer = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LobbySidebarGameListItemImage = styled.img.attrs({})`
	box-sizing: border-box;
	width: 30px;
	height: 30px;
	display: flex;
	background-color: #1a222f;
	padding: 5px;
`;

export const LobbyContentContainer = styled.div`
	box-sizing: border-box;
	width: 97%;
	height: 95%;
	background-color: rgba(0, 0, 0, 0.1);
	padding: 2%;
	border-radius: 10px;
`;

export const LobbyContent = styled.section`
	position: relative;
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PaginationContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	flex-flow: row nowrap;
	margin-bottom: 1%;
`;

export const PaginationArrowLeft = styled.button`
	height: 100%;
	width: 10%;
	background-color: rgba(255, 255, 255, 0.1);
	border: none;

	&:hover {
		border: 4px solid ${backgroundColor};
	}
`;

export const PaginationArrowRight = styled(PaginationArrowLeft)``;

export const LobbyContentMainPanel = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 80%;
	background-color: rgba(255, 255, 255, 0.1);
`;

export const PaginationContent = styled.div`
	width: 80%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.1);
`;

export const LobbyContentButtonsContainer = styled.div`
	width: 100%;
	height: 10%;
	background-color: rgba(255, 255, 255, 0.1);
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
`;
