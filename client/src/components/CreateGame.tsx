import { useEffect } from "react";

const CreateGame = () => {
	useEffect(() => {
		const gameID = fetch("./localhost:3000/create");
		console.log(gameID);
	}, []);

	return (
		<>
			<p>asd</p>
		</>
	);
};

export default CreateGame;
