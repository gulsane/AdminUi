import { useState } from "react";
import Paginator from "./components/paginator/Paginator";
import data from "./data.json";

function App() {
	const [details, setDetails] = useState(data);

	const handleSave = (detail) => {
		const index = details?.findIndex((element) => element.id === detail.id);
		details[index] = detail;
		setDetails(Array.from([...details]));
	};

	const handleDelete = (...ids) => {
		const newDetails = details.filter((detail) => !ids.includes(detail.id));
		setDetails(() => newDetails);
	};

	return (
		<>
			<div>
				<Paginator
					items={details}
					itemsPerPage={10}
					handleSave={handleSave}
					handleDelete={handleDelete}
				/>
			</div>
		</>
	);
}

export default App;
