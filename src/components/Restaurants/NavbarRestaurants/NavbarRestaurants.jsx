import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiOutlineEnvironment, AiOutlineDown } from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";

import Logo from './img/Logo.png';

import './NavbarRestaurants.css';

export function NavbarRestaurants() {
    return (
        <Navbar expand="lg" className="navbar-main">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="navbar-logo" src={Logo} alt="Logo Hungry" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Compras</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Usuário</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div>
                    <p className="user-info">Olá! <span>Tatiane</span>, você está neste endereço?</p>
                    <p className="user-info-address">
                        <AiOutlineEnvironment />
                        <span>Av. Leopoldinho de Oliveira</span>
                        <AiOutlineDown />
                    </p>
                </div>

                <Nav.Link href="/#" className="nav-link desktop ms-5">
                    <BsBoxArrowLeft className="logout-icon" />
                </Nav.Link>
            </Container>
        </Navbar>
    )
}
