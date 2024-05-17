import Input from "../input/Input";
import { useRef } from "react";

const RowGenerator = ({
	rowDetails,
	handleSave,
	handleDelete,
	handleEdit,
	selected,
	handleSelect,
	editing,
}) => {
	const nameRef = useRef();
	const emailRef = useRef();
	const roleRef = useRef();

	const onSave = () => {
		const details = {
			id: rowDetails.id,
			name: nameRef.current.value(),
			email: emailRef.current.value(),
			role: roleRef.current.value(),
		};
		handleSave(details);
	};

	return (
		<tr
			className={`${selected ? "row-selected" : ""} ${editing ? "editing" : ""}`}
		>
			<td>
				<input
					type="checkbox"
					checked={selected}
					onChange={() => handleSelect(rowDetails.id)}
				/>
			</td>
			<td>
				<Input
					type="text"
					value={rowDetails.name}
					ref={nameRef}
					disabled={!editing}
				/>
			</td>
			<td>
				<Input
					type="text"
					value={rowDetails.email}
					ref={emailRef}
					disabled={!editing}
				/>
			</td>
			<td>
				<Input
					type="text"
					value={rowDetails.role}
					ref={roleRef}
					disabled={!editing}
				/>
			</td>
			<td className="action-buttons">
				{editing ? (
					<button onClick={onSave} className="save">
						<i className="fa fa-floppy-o" aria-hidden="true"></i>
					</button>
				) : (
					<button onClick={() => handleEdit(rowDetails.id)} className="edit">
						<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
					</button>
				)}
				<button onClick={() => handleDelete(rowDetails.id)} className="delete">
					<i className="fa fa-trash-o" aria-hidden="true"></i>
				</button>
			</td>
		</tr>
	);
};

export default RowGenerator;
