import React from "react";
import ListItem from "./ListItem";
export default ({ employees }) => {
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">Name</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<ListItem employees={employees} />
		</table>
	);
};