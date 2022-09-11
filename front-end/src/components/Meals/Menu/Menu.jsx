import { BsPlusLg } from "react-icons/bs";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Menu.css'


export function Menu({
    dishAvatar,
    dishName,
    dishDescription,
    dishPrice,
}) {
    return (
        <>
            <Col sm={12} md={6} lg={6} className="mb-2 mt-1 meals-wrapper">
                <Card border="light" className="dish-card" style={{ width: '100%' }}>
                    <Card.Body>
                        <Row >
                            <Col xs={3} md={4} lg={3} className="d-flex align-self-center justify-content-center">
                                <img className="img-dish" src={dishAvatar} alt="Ilustração do prato" />
                            </Col>

                            <Col xs={9} md={8} lg={9}>
                                <Card.Title className="h2 text-overflow">
                                    {dishName}
                                </Card.Title>

                                <Card.Text className="restaurant-description text-overflow">
                                    {dishDescription}
                                </Card.Text>

                                <Card.Text className="price-description">
                                    {dishPrice.toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })}
                                </Card.Text>
                            </Col>

                            <Col xs={1} md={1} lg={1} className="add-btn">
                                <Button className="d-flex align-items-center">
                                    <BsPlusLg className="bsPlusLg" />
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}