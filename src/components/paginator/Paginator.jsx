import { useState, useRef, useEffect } from "react";
import PageNavigator from "../pageNavigator/PageNavigator";
import Input from "../input/Input";
import "./index.css";

const RowGenerator = ({
	rowDetails,
	handleSave,
	handleDelete,
	handleEdit,
	selected,
	handleSelect,
	editing,
}) => {
	const nameRef = useRef();
	const emailRef = useRef();
	const roleRef = useRef();

	const onSave = () => {
		const details = {
			id: rowDetails.id,
			name: nameRef.current.value(),
			email: emailRef.current.value(),
			role: roleRef.current.value(),
		};
		handleSave(details);
	};

	return (
		<tr className={`${selected ? "row-selected" : ""}`}>
			<td>
				<input
					type="checkbox"
					checked={selected}
					onChange={() => handleSelect(rowDetails.id)}
				/>
			</td>
			<td>
				<Input type="text" value={rowDetails.name} ref={nameRef} />
			</td>
			<td>
				<Input type="text" value={rowDetails.email} ref={emailRef} />
			</td>
			<td>
				<Input type="text" value={rowDetails.role} ref={roleRef} />
			</td>
			<td>
				{editing ? (
					<button onClick={onSave}>
						<i className="fa fa-floppy-o" aria-hidden="true"></i>
					</button>
				) : (
					<button onClick={() => handleEdit(rowDetails.id)}>
						<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
					</button>
				)}
				<button onClick={() => handleDelete(rowDetails.id)}>
					<i className="fa fa-trash-o" aria-hidden="true"></i>
				</button>
			</td>
		</tr>
	);
};

const Paginator = ({
	items = [],
	itemsPerPage = 10,
	handleSave,
	handleDelete,
}) => {
	const [selectedPageIndex, setSelectedPageIndex] = useState(1);
	const [selectedItems, setSelectedItems] = useState([]);
	const [eidtId, setEditId] = useState(null);

	const pages = Math.ceil(items.length / itemsPerPage);

	const showableItems = items.slice(
		(selectedPageIndex - 1) * itemsPerPage,
		selectedPageIndex * itemsPerPage
	);

	useEffect(() => {
		if (showableItems.length <= 0 && selectedPageIndex > pages) {
			setSelectedPageIndex((pre) => --pre);
		}
	}, [items]);

	const resetPage = () => {
		setSelectedItems([]);
		setEditId(null);
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
		handleDelete(...id);
		resetPage();
	};

	const onSave = (details) => {
		handleSave(details);
		resetPage();
	};

	return (
		<>
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
