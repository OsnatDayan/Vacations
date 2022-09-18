import { Navbar, Nav, Container } from 'react-bootstrap';
export function SecondNavBar(props: any) {

    return (
        <><>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/MyVacationList">Vacation List</Nav.Link>
                        {props.role == 1 ? <>
                            <Nav.Link href="/Report"> Report</Nav.Link>
                            <Nav.Link href="/AddVacation">Add Vacation</Nav.Link>
                        </> : <></>}
                        <Nav.Link href="/" onClick={() => { sessionStorage.setItem('token', '') }}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar></>


        </>

    )
}