import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './SearchBar.css'

export function SearchBar() {
    const [value, setValue] = useState('')

    return (
        <>

            <Container className="mb-2 mt-2">
                <Row className="d-flex justify-content-between">
                    <Col xs={8} md={8} lg={8}>
                        <InputGroup className="d-flex align-items-center justify-content-center search">
                            <Form.Control
                                className="search-bar"
                                type="search"
                                name="Search"
                                id="search"
                                //value={value}
                                //onChange={(e) => setValue(e.target.value)}
                                placeholder="Pesquisar"
                            />

                            <Button id="search-btn">
                                <AiOutlineSearch className="search-icon" />
                            </Button>
                        </InputGroup>
                    </Col>

                    <Col xs={4} md={4} lg={4} className="d-flex justify-content-end">
                        <Button id="filter-btn" className="d-flex align-items-center">
                            <BsFilterRight className="filter-icon" />&nbsp;Filtros
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
