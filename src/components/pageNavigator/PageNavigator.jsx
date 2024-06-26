import "./index.css";

const PageNavigator = ({
	pages,
	selectedPageIndex,
	handlePageIndex,
	handlePageNavigator,
}) => {
	const pageIndexes = [];

	for (let index = 1; index <= pages; index++) {
		pageIndexes.push(index);
	}

	return (
		<div className="container">
			<button
				className="button first-page"
				disabled={selectedPageIndex === 1 || pages === 0 ? true : false}
				onClick={() => handlePageNavigator("first-page")}
			>
				<i className="fa-solid fa-angles-left"></i>
			</button>
			<button
				className="button previous-page"
				disabled={selectedPageIndex === 1 || pages === 0 ? true : false}
				onClick={() => handlePageNavigator("previous-page")}
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
				disabled={selectedPageIndex === pages || pages === 0 ? true : false}
				onClick={() => handlePageNavigator("next-page")}
			>
				<i className="fa-solid fa-angle-right"></i>
			</button>
			<button
				className="button next-page"
				disabled={selectedPageIndex === pages || pages === 0 ? true : false}
				onClick={() => handlePageNavigator("last-page")}
			>
				<i className="fa-solid fa-angles-right"></i>
			</button>
		</div>
	);
};

export default PageNavigator;
