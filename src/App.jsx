import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import data from "./data.json";
import { AppProvider } from "./context/app";

function App() {
	const [details, setDetails] = useState(data);

	const saveDetails = (detail) => {
		const index = details?.findIndex((element) => element.id === detail.id);
		details[index] = detail;
		setDetails(Array.from([...details]));
	};

	const deleteDetails = (...ids) => {
		const newDetails = details.filter((detail) => !ids.includes(detail.id));
		setDetails(() => newDetails);
	};

	return (
		<>
			<AppProvider value={{ details, deleteDetails, saveDetails }}>
				<Pagination itemsPerPage={10} />
			</AppProvider>
		</>
	);
}

export default App;
