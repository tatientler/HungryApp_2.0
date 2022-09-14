import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import { RiEBikeLine } from "react-icons/ri";

import './SearchBar.css';

export function SearchBar({
    search,
    setSearch
}) {
    return (
        <Container className="mb-4 mt-4 searchbar-container">
            <Row className="d-flex justify-content-between">
                <Col xs={4} md={7} lg={8}>
                    <InputGroup className="d-flex align-items-center justify-content-center search">
                        <Form.Control
                            className="search-bar"
                            type="text"
                            name="Search"
                            id="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Pesquisar"
                        />

                        <Button id="search-btn">
                            <AiOutlineSearch className="search-icon" />
                        </Button>
                    </InputGroup>
                </Col>

                <Col xs={3} md={2} lg={1} className="d-flex justify-content-center p-0">
                    <Button id="filter-btn" className="d-flex align-items-center">
                        <BsFilterRight className="filter-icon" />&nbsp;Filtros
                    </Button>
                </Col>

                <Col xs={5} md={3} lg={2} className="d-flex justify-content-center p-0">
                    <Button id="delivery-btn" className="d-flex align-items-center">
                        <RiEBikeLine className="bike-icon" />&nbsp;Entregas&nbsp;<AiOutlineDown className="drop-icon" />
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
