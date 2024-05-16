import { useRef } from "react";
import Input from "../input/Input";
import "./index.css";

const SearchBar = ({ handleSearch }) => {
	const searchInput = useRef();

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearch(searchInput.current.value().trim());
		}
	};

	return (
		<div>
			<Input
				ref={searchInput}
				type="text"
				value=""
				onKeyDown={handleKeyDown}
				className="serachBar"
				placeholder="Search by name, email or role"
			/>
		</div>
	);
};

export default SearchBar;
