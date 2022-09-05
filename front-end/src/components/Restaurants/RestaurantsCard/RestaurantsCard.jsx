import {
    BsPatchCheckFill,
    BsStarHalf,
    BsStopwatch,
    BsFillGeoFill
} from "react-icons/bs";

import { LikeButton } from "../LikeButton/LikeButton";

import Container from 'react-bootstrap/Container';
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
            <Col sm={12} md={6} lg={4} className="restaurant-card mb-3 mt-1">
                <Card  style={{ width: '100%' }}>
                    <Card.Body>
                        <Row className="teste">
                            <Col span={4} className="align-self-center justify-content-center">
                            <img className="img-logo" src={restaurantAvatar} alt="Logo do restaurante" />
                            </Col>

                            <Col span={6}>
                                <Card.Title className="h2 text-overflow">
                                    {restaurantName} &nbsp;
                                    <BsPatchCheckFill className="check-icon" />
                                </Card.Title>

                                <Card.Text className="restaurant-description">
                                    <BsStarHalf className="star-icon" />&nbsp;
                                    <span> {restaurantRating}</span>&nbsp;|&nbsp;

                                    <span>R$ 5,60</span>
                                </Card.Text>
                                <Card.Text className="restaurant-description">
                                    <BsStopwatch className="icon" />&nbsp;
                                    <span>30min - 50min |&nbsp;</span>

                                    <BsFillGeoFill className="gps-icon" />&nbsp;
                                    <span> 2km</span>
                                </Card.Text>
                            </Col>

                            <Col span={2} className="align-self-center justify-content-end">
                            <LikeButton />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <div className="restaurant-card mb-3 mt-1 col-sm-12 col-md-6 col-xl-4 d-flex">
                <div className="align-self-center">
                    <img className="img-logo me-3 ms-1" src={restaurantAvatar} alt="Logo do restaurante" />
                </div>

                <div className="col-8" onClick={() => getRestaurant(id)}>
                    <h2 className="h2 text-overflow" id="1">
                        {restaurantName} &nbsp;
                        <BsPatchCheckFill className="check-icon" />
                    </h2>

                    <p className="restaurant-description d-flex align-items-center">
                        <BsStarHalf className="star-icon" />&nbsp;
                        <span> {restaurantRating}</span>&nbsp;|&nbsp;

                        <span>R$ 5,60</span>
                    </p>

                    <p className="restaurant-description d-flex align-items-center">
                        <BsStopwatch className="icon" />&nbsp;
                        <span>30min - 50min |&nbsp;</span>

                        <BsFillGeoFill className="gps-icon" />&nbsp;
                        <span> 2km</span>
                    </p>
                </div>

                <LikeButton />

            </div>
        </>
    )
}