import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

export const PasswordReset = ({ handleOnChange, handleOnSubmit, email} ) => {

    return (
        <Container>
        <Row>
            <Col>
                <h1 className='text-primary text-center'>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter Email'
                        required
                        />
                    </Form.Group>
                    <br/>
                    <Button type='submit'>Login</Button>
                </Form>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <a href='#!'>Login Now</a>
            </Col>
        </Row>
    </Container>
    );
};

PasswordReset.prototype = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};
