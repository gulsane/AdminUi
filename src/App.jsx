import { useState } from "react";
import Paginator from "./components/paginator/Paginator";
import data from "./data.json";

function App() {
	const [details, setDetails] = useState(data);

	const handleSave = (detail) => {
		console.log("saving", detail);

		const index = details?.findIndex((element) => element.id === detail.id);
		details[index] = detail;
		setDetails(Array.from([...details]));
	};
	return (
		<>
			<div>
				<Paginator items={details} itemsPerPage={10} handleSave={handleSave} />
			</div>
		</>
	);
}

export default App;
