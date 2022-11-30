import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tickets from '../../assets/data/TicketData.json';
import {Header} from '../../layout/navigation/Header';
import {Footer} from '../../layout/navigation/Footer';

export const Home = () => {
	let history = useNavigate();

	const handleEdit = (id, subject, status, content, assignedTo) => {
		localStorage.setItem('id', id);
		localStorage.setItem('subject', subject);
		localStorage.setItem('status', status);
		localStorage.setItem('content', content);
		localStorage.setItem('assignedTo', assignedTo);

	}

	const handleDelete = (id) => {
		var index = Tickets.map((e) => {
			return e.id
		}).indexOf(id);

		Tickets.splice(index, 1);

		history('/');
	}

	return (
		<Fragment>
			<div>
				<Header/>
			</div>
			<div style={{margin: "10rem"}}>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Subject</th>
							<th>Status</th>
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
											{item.content}
										</td>
										<td>
											{item.assignedTo}
										</td>
										<td>
											<Link to={`/edit`}>
												<Button variant="info" onClick={() => handleEdit(item.id, item.subject, item.status, item.content, item.assignedTo)}>Edit</Button>
											</Link>
											&nbsp;
											<Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
										</td>
									</tr>
								)
							}) :
							"No data available"
						}
					</tbody>
				</Table>
				<br/>
				<Link className='d-grid gap-2' to="/create">
						<Button size='lg' style={{width: "200px", height: "50px"}}>Create New Ticket</Button>
				</Link>
				<br/>
				<br/>
				<div className='bottom'>
					<Footer/>
				</div>
				
			</div>
		</Fragment>
	)
};