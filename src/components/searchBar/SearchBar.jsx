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
		<div className="searchBar">
			<Input
				ref={searchInput}
				type="text"
				value=""
				className="searchBarInput"
				onKeyDown={handleKeyDown}
				placeholder="Search by name, email or role"
			/>
			<i
				className="fa fa-search search-icon"
				aria-hidden="true"
				onClick={() => handleSearch(searchInput.current.value().trim())}
			></i>
		</div>
	);
};

export default SearchBar;
