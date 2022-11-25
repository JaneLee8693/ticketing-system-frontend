import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

export const PasswordResetForm = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email} ) => {

    return (
        <Container>
        <Row>
            <Col>
                <h1 className='text-primary text-center'>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                    <Button type='submit'>Reset Password</Button>
                </Form>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <a href='#!' onClick={() => formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
    );
};

PasswordResetForm.prototype = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};
