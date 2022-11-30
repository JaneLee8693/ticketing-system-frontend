import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tickets from '../../assets/data/TicketData.json';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { v4 as uuid} from 'uuid';
import { Link, useNavigate} from 'react-router-dom';

export const EditTicketForm = () => {
    const[id, setId] = useState('');
    const[subject, setSubject] = useState('');
    const[status, setStatus] = useState('');
    const[content, setContent] = useState('');
    const[assignedTo, setAssignedTo] = useState('');

    let history = useNavigate();

    var index = Tickets.map((e) => {
        return e.id
    }).indexOf(id);

    const handleEdit = (e) => {
        e.preventDefault();

        let data = Tickets[index];
        data.subject = subject;
        data.status = status;
        data.content = content;
        data.assignedTo = assignedTo;
        
        history('/');
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setSubject(localStorage.getItem('subject'))
        setStatus(localStorage.getItem('status'))
        setContent(localStorage.getItem('content'))
        setAssignedTo(localStorage.getItem('assignedTo'))

    }, [])

    return (
        <div>
            <Form className='d-grid gap-1' style={{margin:"15rem"}}>
                <Form.Group className='mb-3' controlId='formSubject'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type='text'
                        value={subject}
                        placeholder='Enter subject'
                        required
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formStatus'>
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        as='select'
                        value={status}
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
                        value={content}
                        placeholder='Enter content'
                        required
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAssignedTo'>
                    <Form.Label>Assigned to</Form.Label>
                    <Form.Control
                        as="select"
                        value={assignedTo}
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
                onClick={(e) => handleEdit(e)}
                >
                    Update
                </Button>
            </Form>
        </div>
    )
};
