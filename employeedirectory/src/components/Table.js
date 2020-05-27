import React from 'react';

function Table() {
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
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark Otto</td>
					<td>123-456-7890</td>
					<td>@mdo</td>
					<td>1/1/2020</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Jacob Thornton</td>
					<td>098-765-4321</td>
					<td>@fat</td>
					<td>1/2/2020</td>
				</tr>
			</tbody>
		</table>
	)
}


export default Table;