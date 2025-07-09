import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	PaginationArrow,
	PaginationArrowIcon,
	PaginationContainer,
	PaginationContent,
} from "../styles/styles";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Paginate = (props: any) => {
	const [pages, setPages] = useState(20);
	return (
		<PaginationContainer>
			<PaginationArrow>
				<PaginationArrowIcon icon={faArrowLeft} />
			</PaginationArrow>
			<PaginationContent>
				<h1>1</h1>
				<h1>2</h1>
				<h1>3</h1>
				<h1>4</h1>
				<h1>...</h1>
			</PaginationContent>
			<PaginationArrow>
				<PaginationArrowIcon icon={faArrowRight} />
			</PaginationArrow>
		</PaginationContainer>
	);
};

export default Paginate;
