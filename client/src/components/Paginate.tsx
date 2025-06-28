import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	PaginationArrowLeft,
	PaginationArrowRight,
	PaginationContainer,
	PaginationContent,
} from "../styles/styles";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Paginate = (props: any) => {
	return (
		<PaginationContainer>
			<PaginationArrowLeft>
				<FontAwesomeIcon
					style={{ color: "#caf0f8", fontSize: "2rem" }}
					icon={faArrowLeft}
				/>
			</PaginationArrowLeft>
			<PaginationContent></PaginationContent>
			<PaginationArrowRight>
				<FontAwesomeIcon
					style={{ color: "#caf0f8", fontSize: "2rem" }}
					icon={faArrowRight}
				/>
			</PaginationArrowRight>
		</PaginationContainer>
	);
};

export default Paginate;
