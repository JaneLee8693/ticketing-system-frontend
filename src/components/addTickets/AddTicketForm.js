import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tickets from '../../assets/data/TicketData.json';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { v4 as uuid} from 'uuid';
import { Link, useNavigate} from 'react-router-dom';

export const AddTicketForm = () => {

    const[subject, setSubject] = useState('');
    const[status, setStatus] = useState('');
    const[content, setContent] = useState('');
    const[assignedTo, setAssignedTo] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let Subject = subject,
        Status = status,
        Content = content,
        AssignedTo = assignedTo;

        Tickets.push({id: uniqueId, subject: Subject, status: Status, content: Content, assignedTo: AssignedTo});
        
        history('/');
    }

    return (
    <div>
        <Form className='d-grid gap-1' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId='formSubject'>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter subject'
                    required
                    onChange={(e) => setSubject(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formStatus'>
                <Form.Label>Status</Form.Label>
                <Form.Control
                    as='select'
                    // value={status}
                    placeholder='Select status'
                    required
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value=""></option>
                    <option value="Backlog">Backlog</option>
                    <option value="In progress">In progress</option>
                    <option value="Completed">Completed</option>
                </Form.Control>                 
            </Form.Group>
            <Form.Group className='mb-3' controlId='formContent'>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter content'
                    required
                    onChange={(e) => setContent(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAssignedTo'>
                <Form.Label>Assigned to</Form.Label>
                <Form.Control
                    as="select"
                    // value={assignedTo}
                    placeholder='Select assignee'
                    required
                    onChange={(e) => setAssignedTo(e.target.value)}
                >
                    <option value=""></option>
                    <option value="Help desk">Help desk</option>
                    <option value="Dev team">Dev team</option>
                </Form.Control>
            </Form.Group>
            <Button
            variant="primary"
            size="lg" 
            block="block"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            >
                Submit
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </Form>
    </div>
    )
};
