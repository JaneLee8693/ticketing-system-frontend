import React, { Fragment } from 'react';
import './Login.css';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tickets from '../../assets/data/TicketData.json';

export const Home = () => {
	const handleDelete = (id) => {
		var index = Tickets.map((e) => {
			return e.id
		}).indexOf(id);

		Tickets.splice(index, 1);
	}

	return (
		<Fragment>
			<div style={{margin: "10rem"}}>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Subject</th>
							<th>Status</th>
							<th>Created Date</th>
							<th>Content</th>
							<th>Assigned To</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							Tickets && Tickets.length > 0 ?
							Tickets.map((item) => {
								return (
									<tr>
										<td>
											{item.subject}
										</td>
										<td>
											{item.status}
										</td>
										<td>
											{item.addedAt}
										</td>
										<td>
											{item.content}
										</td>
										<td>
											{item.assignedTo}
										</td>
										<td>
											<Button onClick={() => alert(item.id)}>Edit</Button>
											&nbsp;
											<Button onClick={() => handleDelete(item.id)}>Delete</Button>
										</td>
									</tr>
								)
							}) :
							"No data available"
						}
					</tbody>
				</Table>
			</div>
		</Fragment>
	)
};