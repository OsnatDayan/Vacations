import { createRef, useState } from 'react';
import { Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { actions } from '../fetch-calls';
export function Register() {
    const [status, setStatus] = useState<any>('failure')
    const firstRef = createRef<HTMLInputElement>();
    const lastRef = createRef<HTMLInputElement>();
    const uNameRef = createRef<HTMLInputElement>();
    const uPassRef = createRef<HTMLInputElement>();
    const newUser = (e: any) => {
        e.preventDefault();
        let a = {
            first_name: firstRef.current?.value,
            last_name: lastRef.current?.value,
            user_name: uNameRef.current?.value,
            password: uPassRef.current?.value,
        }
        actions.register(a).then(res => {
            console.log(res);
            setStatus('success');
        }).catch(err => {
            alert('username already exists')
            console.log(err.message)
        });

    }
    return (
        <Form onSubmit={(e) => newUser(e)}>
            <Form.Group className="mb-3"  >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" required={true} ref={firstRef} />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" required={true} ref={lastRef} />
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" required={true} ref={uNameRef} />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required={true} ref={uPassRef} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sing In
            </Button>
            {status == 'success' ? <><Navigate to="/" replace={true} /></> : <></>}

        </Form>
    );
}


