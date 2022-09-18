import { createRef, useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { actions } from '../fetch-calls'
import { SecondNavBar } from './SecondNavBar';

export function AddVacation() {
    const [added, setAdded] = useState<boolean>(false);
    const [role, setRole] = useState<number>(1);
    const destRef = createRef<HTMLInputElement>();
    const descRef = createRef<HTMLInputElement>();
    const picRef = createRef<HTMLInputElement>();
    const startRef = createRef<HTMLInputElement>();
    const endRef = createRef<HTMLInputElement>();
    const priceRef = createRef<HTMLInputElement>();
    let t = actions.getToken();
    useEffect(() => {
        actions.fetchWithoutData(actions.END_POINTS.getVacation, actions.methods.GET).then(res => setRole(res.role))
    }, [])
    const AddVacation = (e: any) => {
        e.preventDefault();
        let a = actions.buildVacatinBody(descRef.current?.value, destRef.current?.value, picRef.current?.value, startRef.current?.value,
            endRef.current?.value, priceRef.current?.value);
        console.log(a);
        actions.fetchWithData(actions.END_POINTS.addVacation, actions.methods.POST, a).then(res => {
            setAdded(true);
            console.log(res);
        })
    }
    return (
        <>
            {role == 1 && t !== "" ? <>
                <Container>
                    <SecondNavBar />
                    <Form onSubmit={(e) => AddVacation(e)} >
                        <Form.Label>ADD VACATION</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Label>DESTINATION</Form.Label>
                            <Form.Control type="text" placeholder="destination" ref={destRef} required={true} />
                            <Form.Label>DESCRIPTION</Form.Label>
                            <Form.Control type="text" placeholder="descriprion" ref={descRef} required={true} />
                            <Form.Label>PICTURE</Form.Label>
                            <Form.Control type="text" placeholder="picture" ref={picRef} required={true} />
                            <Form.Label>START-DATE</Form.Label>
                            <Form.Control type="DATE" placeholder="START-DATE" ref={startRef} required={true} />
                            <Form.Label>END-DATE</Form.Label>
                            <Form.Control type="DATE" placeholder="END-DATE" ref={endRef} required={true} />
                            <Form.Label>PRICE</Form.Label>
                            <Form.Control type="number" placeholder="price" ref={priceRef} required={true} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            ADD VACATION
                        </Button>
                        {added == true ? <>{window.location.replace('http://localhost:3000/MyVacationList')}</> : <></>}
                    </Form>
                </Container>
            </> : <>
                {t == '' ? window.location.replace('http://localhost:3000') :
                    window.location.replace('http://localhost:3000/MyVacationList')
                }
            </>}
        </>
    )
}