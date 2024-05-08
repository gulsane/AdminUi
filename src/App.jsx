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

	const handleDelete = (id) => {
		setDetails((preDetails) =>
			Array.from(preDetails.filter((detail) => detail.id !== id))
		);
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
