import { useState } from "react";

import "./index.css";

const Paginator = ({ pageNumbers }) => {
	const [selectedPageIndex, setSelectedPageIndex] = useState(1);

	const pageIndexes = [];
	for (let index = 1; index <= pageNumbers; index++) {
		pageIndexes.push(index);
	}

	return (
		<div className="container">
			<button
				className="button first-page"
				disabled={selectedPageIndex === 1 ? true : false}
			>
				<i className="fa-solid fa-angles-left"></i>
			</button>
			<button
				className="button previous-page"
				disabled={selectedPageIndex === 1 ? true : false}
			>
				<i className="fa-solid fa-angle-left"></i>
			</button>
			<div className="links">
				{pageIndexes.map((index) => (
					<button
						className={`link ${selectedPageIndex === index ? "selected" : ""}`}
						key={index}
					>
						{index}
					</button>
				))}
			</div>
			<button
				className="button next-page"
				disabled={selectedPageIndex === pageNumbers ? true : false}
			>
				<i className="fa-solid fa-angles-right"></i>
			</button>
			<button
				className="button last-page"
				disabled={selectedPageIndex === pageNumbers ? true : false}
			>
				<i className="fa-solid fa-angle-right"></i>
			</button>
		</div>
	);
};

export default Paginator;
