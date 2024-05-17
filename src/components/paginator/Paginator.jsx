import { useState, useEffect } from "react";
import PageNavigator from "../pageNavigator/PageNavigator";
import SearchBar from "../searchBar/SearchBar";
import RowGenerator from "./RowGenerator";
import "./index.css";
import { hasPartialValue } from "../../utils";
import { useAppContext } from "../../context/app";

const Paginator = ({ itemsPerPage = 10 }) => {
	const [selectedPageIndex, setSelectedPageIndex] = useState(1);
	const [selectedItems, setSelectedItems] = useState([]);
	const [eidtId, setEditId] = useState(null);
	const [serachField, setSearchField] = useState("");

	const { details, deleteDetails, saveDetails } = useAppContext();

	const searchedResult = details.filter((detail) =>
		hasPartialValue(serachField, detail)
	);

	const pages = Math.ceil(searchedResult.length / itemsPerPage);

	const showableItems = searchedResult.slice(
		(selectedPageIndex - 1) * itemsPerPage,
		selectedPageIndex * itemsPerPage
	);

	useEffect(() => {
		if (showableItems.length <= 0) {
			setSelectedPageIndex(pages);
		}
	}, [pages]);

	const resetPage = () => {
		setSelectedItems([]);
		setEditId(null);
	};

	const handleSearch = (searchValue) => {
		setSearchField(searchValue);
		setSelectedPageIndex(1);
	};

	const handlePageIndex = (index) => {
		setSelectedPageIndex(index);
		resetPage();
	};

	const handlePageNavigator = (navigatorSpecifier) => {
		switch (navigatorSpecifier) {
			case "previous-page":
				if (selectedPageIndex > 1) {
					setSelectedPageIndex((prePageIndex) => prePageIndex - 1);
				}
				break;
			case "next-page":
				if (selectedPageIndex < pages) {
					setSelectedPageIndex((prePageIndex) => prePageIndex + 1);
				}
				break;
			case "first-page":
				setSelectedPageIndex(1);
				break;
			case "last-page":
				setSelectedPageIndex(pages);
				break;
			default:
				break;
		}
	};

	const handleSelectAll = () => {
		if (selectedItems.length < showableItems.length) {
			setSelectedItems(() => Array.from(showableItems.map((item) => item.id)));
		} else {
			setSelectedItems([]);
		}
	};

	const handleSelect = (id) => {
		if (selectedItems.includes(id)) {
			setSelectedItems((pre) => Array.from(pre.filter((preId) => preId !== id)));
		} else {
			setSelectedItems((pre) => Array.from([...pre, id]));
		}
	};

	const onDelete = (...id) => {
		deleteDetails(...id);
		resetPage();
	};

	const onSave = (details) => {
		saveDetails(details);
		resetPage();
	};

	return (
		<>
			<SearchBar handleSearch={handleSearch} />
			<div className="paginator">
				<table className="table">
					<thead className="table-header">
						<tr>
							<th>
								<input
									type="checkbox"
									checked={
										selectedItems.length !== 0 &&
										selectedItems.length === showableItems.length
									}
									onChange={handleSelectAll}
								/>
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{showableItems.map((item) => (
							<RowGenerator
								rowDetails={item}
								key={item.id}
								selected={selectedItems.includes(item.id)}
								handleSave={onSave}
								handleDelete={onDelete}
								handleSelect={handleSelect}
								handleEdit={(id) => {
									setEditId(id);
								}}
								editing={eidtId === item.id}
							/>
						))}
					</tbody>
				</table>
				<div className="tail">
					<button
						className="button-delete"
						disabled={selectedItems.length === 0}
						onClick={() => onDelete(...selectedItems)}
					>
						Delete Selected
					</button>
					<PageNavigator
						pages={pages}
						selectedPageIndex={selectedPageIndex}
						handlePageIndex={handlePageIndex}
						handlePageNavigator={handlePageNavigator}
					/>
				</div>
			</div>
		</>
	);
};

export default Paginator;
