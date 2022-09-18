import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddVacation } from './AddVacation';
import { Login } from './Login';
import { Register } from './Register';
import { Report } from './Report';
import { VacationList } from './VacationList';
export function MainNavBar(props: any) {
    return (
        <>
            <BrowserRouter>
                <Container>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/MyVacationList" element={<VacationList />} />
                        <Route path="/Report" element={<Report />} />
                        <Route path="/AddVacation" element={<AddVacation />} />
                    </Routes>
                </Container>

            </BrowserRouter>
        </>)
}

