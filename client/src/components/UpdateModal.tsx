import { createRef, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { actions } from "../fetch-calls";
export function UpdateModal(props: any) {
    const destRef = createRef<HTMLInputElement>();
    const descRef = createRef<HTMLInputElement>();
    const picRef = createRef<HTMLInputElement>();
    const startRef = createRef<HTMLInputElement>();
    const endRef = createRef<HTMLInputElement>();
    const priceRef = createRef<HTMLInputElement>();
    const buildVacation = () => {
        let body = {
            descriprion: descRef.current?.value,
            destination: destRef.current?.value,
            picture: picRef.current?.value,
            start_date: startRef.current?.value,
            end_date: endRef.current?.value,
            price: priceRef.current?.value
        }
        console.log(body);
        return body;
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateVac = () => {
        let a = buildVacation();
        actions.fetchWithData(`${actions.END_POINTS.updataVacation}/${props.vac.id}`, actions.methods.PUT, a)
            .then(res => {
                handleClose();
                window.location.reload();
            })
    }
    return (
        <>
            <Button className="btn btn-dark" variant="primary" onClick={handleShow}>
                <AiFillEdit />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Vacation </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>UPDATE VACATION</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Label>DESTINATION</Form.Label>
                            <Form.Control type="text" placeholder={props.vac.destination} ref={destRef} />
                            <Form.Label>DESCRIPTION</Form.Label>
                            <Form.Control type="text" placeholder={props.vac.descriprion} ref={descRef} />
                            <Form.Label>PICTURE</Form.Label>
                            <Form.Control type="text" placeholder={props.vac.picture} ref={picRef} />
                            <Form.Label>START-DATE</Form.Label>
                            <Form.Control type="DATE" placeholder={props.vac.start_date.split('T')[0]} ref={startRef} />
                            <Form.Label>END-DATE</Form.Label>
                            <Form.Control type="DATE" placeholder={props.vac.end_date.split('T')[0]} ref={endRef} />
                            <Form.Label>PRICE</Form.Label>
                            <Form.Control type="number" placeholder={props.vac.price} ref={priceRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => updateVac()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


