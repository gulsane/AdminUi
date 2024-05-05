import { useState } from "react";
import PageNavigator from "../pageNavigator/PageNavigator";
import "./index.css";

const Paginator = ({ items = [], itemsPerPage = 10 }) => {
	const [selectedPageIndex, setSelectedPageIndex] = useState(1);
	const pages = Math.ceil(items.length / itemsPerPage);

	const showableItems = items.slice(
		(selectedPageIndex - 1) * itemsPerPage,
		selectedPageIndex * itemsPerPage
	);

	const handlePageIndex = (index) => {
		setSelectedPageIndex(index);
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

	return (
		<>
			<div className="paginator">
				<table className="table">
					<thead className="table-header">
						<tr>
							<th>
								<input type="checkbox" />
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{showableItems.map((item) => (
							<tr key={item.id}>
								<td>
									<input type="checkbox" />
								</td>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.role}</td>
								<td>
									<button>
										<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
									</button>
									<button>
										<i className="fa fa-trash-o" aria-hidden="true"></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="container">
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
