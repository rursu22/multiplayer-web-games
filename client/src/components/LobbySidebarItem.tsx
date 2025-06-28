import {
	LobbySidebarGameListItemContainer,
	LobbySidebarGameListItemImage,
	LobbySidebarGameListItemImageContainer,
	LobbySidebarGameListItemName,
} from "../styles/styles";

const LobbySidebarItem = (props: any) => {
	return (
		<LobbySidebarGameListItemContainer>
			<LobbySidebarGameListItemName>
				{props.children}
			</LobbySidebarGameListItemName>
			<LobbySidebarGameListItemImageContainer>
				<LobbySidebarGameListItemImage src={props.src} />
			</LobbySidebarGameListItemImageContainer>
		</LobbySidebarGameListItemContainer>
	);
};

export default LobbySidebarItem;
