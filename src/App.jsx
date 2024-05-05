import Paginator from "./components/paginator/Paginator";
import data from "./data.json";

function App() {
	return (
		<>
			<div>
				<Paginator items={data} itemsPerPage={10} />
			</div>
		</>
	);
}

export default App;
