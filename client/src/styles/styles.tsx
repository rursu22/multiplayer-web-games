import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const bgColorDark = "oklch(0.1 0.1 309)";
const bgColor = "oklch(0.15 0.1 309)";
const bgLight = "oklch(0.2 0.1 309)";
const text = "oklch(0.96 0.1 309)";
const textMuted = "oklch(0.76 0.1 309)";
const textButton = "oklch(0.1 0.1 309)";
const highlight = "oklch(0.5 0.2 309)";
const border = "oklch(0.4 0.2 309)";
const borderMuted = "oklch(0.3 0.2 309";
const primary = "oklch(0.76 0.2 309)";
const secondary = "oklch(0.76 0.2 205)";
const boxShadowDarker = "oklch(0 0.1 0)";
const boxShadowLighter = "oklch(0 0.2 0)";

const boxShadow = `0px 2px 2px ${boxShadowDarker}, 0px 4px 4px ${boxShadowLighter};`;
const containerBorderRadius: string = "25px";

export const AppContainer = styled.div`
	background: #263950;
	background: ${bgColorDark};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LobbyContainer = styled.div`
	background-color: ${bgColor};
	position: relative;
	width: 80%;
	height: 80%;
	border-radius: ${containerBorderRadius};
	display: flex;
	flex-flow: row nowrap;

	box-shadow: ${boxShadow};
`;

export const Button = styled.button`
	border: none;
	padding: 1%;
	border-radius: 10px;
	background-color: ${primary};
	font-family: Poppins;
	font-weight: 600;
	color: ${textButton};

	&:hover {
		background-color: ${secondary};
	}
`;
export const LobbySidebarContainer = styled.aside`
	position: relative;
	width: 20%;
	height: 100%;
	background-color: ${bgColor};
	border-top-left-radius: ${containerBorderRadius};
	border-bottom-left-radius: ${containerBorderRadius};
`;

export const LobbySidebarTitle = styled.h1`
	text-align: center;
	color: ${text};
	font-family: "Poppins";
	font-weight: 600;
	font-size: 2rem;
	line-height: 5rem;
	margin-left: 10%;
	margin-top: 2%;
	width: 80%;
	text-shadow: 2px 2px ${bgColorDark};
	letter-spacing: 2px;
`;

export const LobbySidebarGameList = styled.div`
	box-sizing: border-box;
	padding: 5%;
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	width: 90%;
	margin-left: 5%;
	height: 90%;
	border-radius: 10px;
	letter-spacing: 1.5px;
`;

export const LobbySidebarGameListItemContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	width: 100%;
	height: 8%;
	background: linear-gradient(0deg, ${bgColor}, ${bgLight});
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	margin-bottom: 5%;
	box-shadow: ${boxShadow};
	border: 1px solid ${border};
	border-top: 1px solid ${highlight};
	border-radius: 10px;

	&:hover {
	}
`;

export const LobbySidebarGameListItemName = styled.div`
	position: relative;
	font-family: Poppins;
	font-weight: 600;
	color: ${text};
	font-size: 1rem;
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
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
	padding: 5px;
`;

export const LobbyContentContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 95%;
	padding-right: 2%;
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
	box-sizing: border-box;
	position: relative;
	width: 100%;
	height: 10%;
	display: flex;
	flex-flow: row nowrap;
`;

export const PaginationArrow = styled.button`
	height: 100%;
	width: 10%;
	background-color: rgba(0, 0, 0, 0);
	border: none;
	border-radius: 10px;
`;

export const PaginationArrowIcon = styled(FontAwesomeIcon)`
	font-size: 1.5rem;
	color: ${text};
`;

export const LobbyContentMainPanel = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 90%;
	background-color: ${bgLight};
	padding: 1%;
	border-radius: 10px;
`;

export const PaginationContent = styled.div`
	width: 80%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0);
	border-radius: 10px;
	color: ${text};
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
`;

export const LobbyContentButtonsContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 11%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 10px;
`;

export const LobbyContentMainContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 88%;
	margin-bottom: 1%;
	border-radius: 10px;
`;

export const ServerListingContainer = styled.div`
	box-sizing: border-box;
	display: grid;
	width: 100%;
	height: 10%;
	grid-template-columns: 10% 60% 10% 20%;
	border-radius: 10px;
	margin-bottom: 2%;
	background-color: ${bgColor};
	border: 1px solid ${border};
	border-top: 1px solid ${highlight};
	box-shadow: ${boxShadow};
`;

export const ServerListingFlexContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	color: ${text};
`;

export const ServerListingName = styled.h1`
	text-align: center;
`;

export const ServerListingID = styled(ServerListingName)``;

export const ServerListingPlayers = styled.h1``;
