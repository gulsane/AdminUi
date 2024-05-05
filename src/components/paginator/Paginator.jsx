import "./index.css";
const Paginator = () => {
	return (
		<div className="container">
			<button className="button" disabled>
				<i className="fa-solid fa-angles-left"></i>
			</button>
			<button className="button" disabled>
				<i className="fa-solid fa-angle-left"></i>
			</button>
			<div className="links">
				<a href="#" className="link selected">
					1
				</a>
				<a href="#" className="link">
					2
				</a>
				<a href="#" className="link">
					3
				</a>
				<a href="#" className="link">
					4
				</a>
				<a href="#" className="link">
					5
				</a>
			</div>
			<button className="button">
				<i className="fa-solid fa-angles-right"></i>
			</button>
			<button className="button">
				<i className="fa-solid fa-angle-right"></i>
			</button>
		</div>
	);
};

export default Paginator;
