import RowGenerator from "./RowGenerator";

function Page({
	selectedItems,
	eidtId,
	setEditId,
	showableItems,
	handleSelectAll,
	handleSelect,
	onDelete,
	onSave,
}) {
	return (
		<table className="table">
			<thead className="table-header">
				<tr>
					<th>
						<input
							type="checkbox"
							checked={
								selectedItems.length !== 0 &&
								selectedItems.length === showableItems.length
							}
							onChange={handleSelectAll}
						/>
					</th>
					<th>Name</th>
					<th>Email</th>
					<th>Role</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{showableItems.map((item) => (
					<RowGenerator
						rowDetails={item}
						key={item.id}
						selected={selectedItems.includes(item.id)}
						handleSave={onSave}
						handleDelete={onDelete}
						handleSelect={handleSelect}
						handleEdit={(id) => {
							setEditId(id);
						}}
						editing={eidtId === item.id}
					/>
				))}
			</tbody>
		</table>
	);
}

export default Page;
