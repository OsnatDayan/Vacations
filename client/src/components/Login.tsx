import { createRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { actions } from "../fetch-calls";

export function Login() {
    const [token, settoken] = useState<any>(' ');
    const userRef = createRef<HTMLInputElement>();
    const passwordRef = createRef<HTMLInputElement>();
    const buildBody = () => {
        let bodyObj = {
            "username": userRef.current?.value,
            "password": passwordRef.current?.value
        }
        return bodyObj;
    }
    const login = (e: any) => {
        e.preventDefault();
        let a = buildBody();
        actions.login(a).then(res => {
            sessionStorage.setItem('token', res.token);
            settoken("ok");
        }).catch(err => {
            alert('invalid password or username!!')
            console.log(err.message)
        });
    }
    return (
        <>
            <Form onSubmit={(e: any) => login(e)} >
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>USER NAME</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" ref={userRef} required={true} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required={true} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    LOGIN
                </Button >
                <br />
                <a href="/register">NEW TO THE SITE?</a>

            </Form>
            {token == 'ok' ? <Navigate to="/MyVacationList" replace={true} /> : <></>}

        </>
    )

}