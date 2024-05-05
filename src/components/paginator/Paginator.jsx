import { useState } from "react";

import "./index.css";

const Paginator = ({ pageNumber }) => {
	const [selectedPageIndex, setSelectedPageIndex] = useState(1);

	const pageIndexes = [];

	for (let index = 1; index <= pageNumber; index++) {
		pageIndexes.push(index);
	}

	const handlePageIndex = (index) => {
		setSelectedPageIndex(index);
	};

	const handlePageNavitor = (navigatorSpecifier) => {
		switch (navigatorSpecifier) {
			case "previous-page":
				if (selectedPageIndex > 1) {
					setSelectedPageIndex((prePageIndex) => prePageIndex - 1);
				}
				break;
			case "next-page":
				if (selectedPageIndex < pageNumber) {
					setSelectedPageIndex((prePageIndex) => prePageIndex + 1);
				}
				break;
			case "first-page":
				setSelectedPageIndex(1);

				break;
			case "last-page":
				setSelectedPageIndex(pageNumber);

				break;

			default:
				break;
		}
	};

	return (
		<div className="container">
			<button
				className="button first-page"
				disabled={selectedPageIndex === 1 ? true : false}
				onClick={() => handlePageNavitor("first-page")}
			>
				<i className="fa-solid fa-angles-left"></i>
			</button>
			<button
				className="button previous-page"
				disabled={selectedPageIndex === 1 ? true : false}
				onClick={() => handlePageNavitor("previous-page")}
			>
				<i className="fa-solid fa-angle-left"></i>
			</button>
			<div className="links">
				{pageIndexes.map((index) => (
					<button
						className={`link ${selectedPageIndex === index ? "selected" : ""}`}
						key={index}
						onClick={() => handlePageIndex(index)}
					>
						{index}
					</button>
				))}
			</div>

			<button
				className="button last-page"
				disabled={selectedPageIndex === pageNumber ? true : false}
				onClick={() => handlePageNavitor("next-page")}
			>
				<i className="fa-solid fa-angle-right"></i>
			</button>
			<button
				className="button next-page"
				disabled={selectedPageIndex === pageNumber ? true : false}
				onClick={() => handlePageNavitor("last-page")}
			>
				<i className="fa-solid fa-angles-right"></i>
			</button>
		</div>
	);
};

export default Paginator;
