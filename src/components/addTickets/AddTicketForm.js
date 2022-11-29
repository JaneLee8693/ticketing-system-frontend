import React from 'react';
import { FormGroup, FormControl, Button, Form, Field } from "react-bootstrap";


export const AddTicketForm = () => {
  return (
    <div className='form-wrapper'>
        <Form>
            <FormGroup>
                <Field
                    name='subject'
                    type='text'
                    className='form-control'
                    required
                >
                    Subject
                </Field>
                <Field
                    name='status'
                    type='text'
                    className='form-control'
                    required
                >
                    Status
                </Field>
                <Field
                    name='addedAt'
                    type='text'
                    className='form-control'
                    required
                >
                    Created on
                </Field>
                <Field
                    name='content'
                    type='text'
                    className='form-control'
                    required
                >
                    Content
                </Field>
                <Field
                    name='subject'
                    type='text'
                    className='form-control'
                    required
                >
                    Assign to
                </Field>
            </FormGroup>
            <Button variant="danger" size="lg" 
            block="block" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}
