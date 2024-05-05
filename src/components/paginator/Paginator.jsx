import { useState } from "react";
import PageNavigator from "../pageNavigator/PageNavigator";

const Paginator = ({ items = [], itemsPerPage = 10 }) => {
	const [selectedPageIndex, setSelectedPageIndex] = useState(1);
	const pages = Math.ceil(items.length / itemsPerPage);

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
		<>
			<PageNavigator
				pageNumber={pages}
				selectedPageIndex={selectedPageIndex}
				handlePageIndex={handlePageIndex}
				handlePageNavigator={handlePageNavigator}
			/>
		</>
	);
};

export default Paginator;
