import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavbarRestaurant.css'

export function NavbarRestaurant() {
    const navigate = useNavigate()

    return (
        <>
            <Navbar className="navbar-restaurant">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link id="back-btn" onClick={() => navigate(-1)}>
                            <AiOutlineDoubleLeft />
                        </Nav.Link>
                    </Nav>
                    
                    <Navbar.Brand href="/#" className="div-img">
                        <img src={require('./img/Logo.png')} className="logo" alt="Hungry" />
                    </Navbar.Brand>

                    <Nav.Link href="/#" className="nav-link desktop ms-5">
                        <BsBoxArrowLeft className="logout-icon" />
                    </Nav.Link>
                </Container>
            </Navbar>
        </>
    )
}