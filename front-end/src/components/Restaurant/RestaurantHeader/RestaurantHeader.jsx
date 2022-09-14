import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import { AiOutlineEnvironment } from "react-icons/ai";
import {
    BsPatchCheckFill,
    BsStarHalf,
    BsStopwatch,
    BsFillGeoFill,
    BsFillTelephoneFill
} from "react-icons/bs";

import './RestaurantHeader.css';

export function RestaurantHeader({
    restaurant
}) {

    return (
        <Container>
            <Card border="light">
                <Card.Img variant="top" src={restaurant.backgroundImage} className="restaurant-header-img d-flex justify-content-center" alt="Prato ilustrativo" />
                <Card.Body className="restaurant-header">
                    <Row >
                        <Col xs={2} md={2} lg={3} className="d-flex align-self-center justify-content-center">
                            <img className="restaurant-header-logo" src={restaurant.avatar} alt="Logo do restaurante" />
                        </Col>

                        <Col xs={10} md={10} lg={9} className='mb-2'>
                            <Card.Title className="restaurant-header-h2 text-overflow">
                                <span>{restaurant.name}</span>&nbsp;
                                <BsPatchCheckFill className="check-icon" />
                            </Card.Title>

                            <Card.Text className="restaurant-header-description text-overflow d-flex align-items-center">
                                <AiOutlineEnvironment className="address" />&nbsp;
                                <span>{restaurant.address}</span>
                            </Card.Text>

                            <Card.Text className="restaurant-header-description d-flex align-items-center">
                                <BsFillTelephoneFill className="phone" />&nbsp;
                                <span>{restaurant.phone}</span>
                            </Card.Text>

                            <Card.Text className="d-flex mt-3 badge-info">
                                <Badge bg="badge" text="dark" className="d-flex align-items-center me-3">
                                    <BsStarHalf className="star-icon" />&nbsp;
                                    <span>{restaurant.rating}</span>
                                </Badge>

                                <Badge bg="badge" text="dark" className="d-flex align-items-center me-3">
                                    <BsStopwatch className="watch-icon" />&nbsp;
                                    30min - 50min
                                </Badge>

                                <Badge bg="badge" text="dark" className="d-flex align-items-center">
                                    <BsFillGeoFill className="gps-icon" />&nbsp;
                                    2 km
                                </Badge>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
