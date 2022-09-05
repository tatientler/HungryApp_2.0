import { AiOutlineEnvironment, AiOutlineDown } from "react-icons/ai";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './img/Logo.png'

import './NavbarMain.css'

export function NavbarMain() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className="navbar-logo" src={Logo} alt="Logo Hungry" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Compras</Nav.Link>
                            <Nav.Link href="#link">Usuário</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <div>
                        <p className="user-info">Olá! <span>Fred</span>, você está neste endereço?</p>
                        <p className="user-info-address">
                            <AiOutlineEnvironment />
                            <span>Av. Leopoldinho de Oliveira</span>
                            <AiOutlineDown />
                        </p>
                    </div>
                </Container>
            </Navbar>      
        </>
    )
}