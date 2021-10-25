import React, { useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import { Form, Button, Row, Col} from 'react-bootstrap'
const Contact = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
        console.log('errorMessage', errorMessage);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    
    return(

        <section>
        <Row>
            <Col md={{ span: 6, offset: 3}}>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control defaultValue={name} onBlur={handleChange} placeholder="Enter your Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control defaultValue={email} onBlur={handleChange} placeholder="Enter your Email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control defaultValue={message} onBlur={handleChange}  placeholder="Enter your Message" as="textarea" rows={5}/>
            </Form.Group>


                <Button type="submit">Submit</Button>
            </Form>
            </Col>
        </Row>
        </section>
    );
}

export default Contact;