import {
    BsPatchCheckFill,
    BsStarHalf,
    BsStopwatch,
    BsFillGeoFill
} from "react-icons/bs";

import { LikeButton } from "../LikeButton/LikeButton";

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import './RestaurantsCard.css'

export function RestaurantsCard(
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
                                <img className="img-logo" src={restaurantAvatar} alt="Logo do restaurante" />
                            </Col>
                        
                            <Col xs={8} md={7} lg={6}>
                                <Card.Title className="h2 text-overflow" onClick={() => getRestaurant(id)}>
                                    {restaurantName} &nbsp;
                                    <BsPatchCheckFill className="check-icon" />
                                </Card.Title>

                                <Card.Text className="restaurant-description d-flex align-items-center">
                                    <BsStarHalf className="star-icon" />&nbsp;
                                    <span> {restaurantRating}</span>&nbsp;|&nbsp;

                                    <span>R$ 5,60</span>
                                </Card.Text>
                                <Card.Text className="restaurant-description d-flex align-items-center">
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
