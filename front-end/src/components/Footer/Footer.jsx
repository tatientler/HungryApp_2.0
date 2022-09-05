import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle, BsBoxArrowLeft } from "react-icons/bs";

import "./Footer.css"

export function Footer() {
    return (
        <>
            <Navbar bg="light" variant="light" fixed='bottom' >
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link className='d-flex align-items-center' href="/#"><AiOutlineHome className="icon" /></Nav.Link>
                        <Nav.Link className='d-flex align-items-center' href="/#"><AiOutlineShoppingCart className="icon" /></Nav.Link>
                        <Nav.Link className='d-flex align-items-center' href="/#"><BsPersonCircle className="icon" /></Nav.Link>
                        <Nav.Link className='d-flex align-items-center' href="/#"><BsBoxArrowLeft className="icon" /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


//nav classes: bg-light d-flex justify-content-evenly"