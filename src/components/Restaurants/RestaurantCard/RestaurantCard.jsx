import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { LikeButton } from "../LikeButton/LikeButton";

import {
    BsPatchCheckFill,
    BsStarHalf,
    BsStopwatch,
    BsFillGeoFill
} from "react-icons/bs";

import './RestaurantCard.css';

export function RestaurantCard(
    {
        id,
        restaurantName,
        restaurantAvatar,
        restaurantRating,
        getRestaurant
    }
) {
    return (
        <>
            <Col sm={12} md={6} lg={4} className="mb-2 last-restaurant-card">
                <Card border="light" className="restaurant-card" style={{ width: '100%' }}>
                    <Card.Body>
                        <Row>
                            <Col xs={2} md={3} lg={4} className="d-flex align-self-center justify-content-center">
                                <img className="restaurant-card-img" src={restaurantAvatar} alt="Logo do restaurante" />
                            </Col>

                            <Col xs={8} md={7} lg={6}>
                                <Row className="restaurant-card-row_title">
                                    <Card.Title className="restaurant-card-h2" onClick={() => getRestaurant(id)}>
                                        {restaurantName}&nbsp;
                                    </Card.Title>
                                    <div className="restaurant-card-icon">
                                        <BsPatchCheckFill className="check-icon" />
                                    </div>
                                </Row>

                                <Card.Text className="restaurant-card-description d-flex align-items-center">
                                    <BsStarHalf className="star-icon" />&nbsp;
                                    <span> {restaurantRating}</span>&nbsp;|&nbsp;

                                    <span>R$ 5,60</span>
                                </Card.Text>
                                <Card.Text className="restaurant-card-description d-flex align-items-center">
                                    <BsStopwatch className="icon" />&nbsp;
                                    <span>30min - 50min |&nbsp;</span>

                                    <BsFillGeoFill className="gps-icon" />&nbsp;
                                    <span> 2km</span>
                                </Card.Text>
                            </Col>

                            <Col xs={2} md={2} lg={2} className="d-flex align-self-center justify-content-center">
                                <LikeButton />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
