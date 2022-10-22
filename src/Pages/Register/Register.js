import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
    const { createUser, updateUserProfile, veryfiyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const handleProfileSubmit = (name) => {
        const profile = {
            displayName: name
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset()
                handleProfileSubmit(name)
                handleEmailVerifaction()
                toast.success('Please veryfiy your email address before login')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })

    }

    const handleEmailVerifaction = () => {
        veryfiyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = (event) => {
        const checked = event.target.checked;
        setAccepted(checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and conditon</Link></>} />
            </Form.Group>
            <Button className='d-block' variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <Toaster />
        </Form>
    );
};

export default Register;