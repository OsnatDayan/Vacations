import { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { actions } from "../fetch-calls";
import { UpdateModal } from "./UpdateModal";
export function VacationCard(props: any) {
    const check = (num: number) => ((num == 1 ? 'UNFOLLOW' : 'FOLLOW'));
    let vac = { ...props };
    const [Switch, setSwitch] = useState<any>(check(vac.follow));
    const onfollowed = () => {
        if (Switch == 'FOLLOW') {
            setSwitch('UNFOLLOW');
            actions.fetchWithData(actions.END_POINTS.follow, actions.methods.POST, { "vid": vac.id })
        } else {
            actions.fetchWithData(actions.END_POINTS.unfolowo, actions.methods.POST, { "vid": vac.id })
            setSwitch('FOLLOW');
        }
    }
    const removeVacation = (e: any, id: number) => {
        e.preventDefault();
        actions.fetchWithoutData(`${actions.END_POINTS.deleteVacation}/${id}`, actions.methods.DELETE).then(res => {
            window.location.reload();
            console.log(res);
        })
    }
    return (
        <>
            <Card border="dark" className="col-sm-4" style={{ width: '18rem' }} text={'dark'} >
                <Card.Img variant="top" src={vac.picture} />
                <Card.Body>
                    <Card.Title>{vac.destination}</Card.Title>
                    <Card.Text>{vac.descriprion}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>start: {vac.start_date.split('T')[0]}</ListGroupItem>
                    <ListGroupItem>end: {vac.end_date.split('T')[0]}</ListGroupItem>
                    <ListGroupItem>{vac.price}$</ListGroupItem>
                    <ListGroupItem>{vac.followers}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    {vac.role == 1 ? <>
                        <Button className="btn btn-dark" onClick={(e: any) => removeVacation(e, vac.id)} >  <TiDelete /></Button>
                        <UpdateModal vac={vac} />
                    </> :  <> <Button onClick={() => onfollowed()}>{Switch}</Button>
                    </>}
                </Card.Body>
            </Card></>
    )



}