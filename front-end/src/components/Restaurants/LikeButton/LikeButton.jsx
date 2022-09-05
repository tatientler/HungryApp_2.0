import {
    BsHeart,
    BsHeartFill
} from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from "react";

import './LikeButton.css'

export function LikeButton() {
    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        if (isClicked) {
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }

    return (
        <Container className="d-flex align-items-center">
            <Row onClick={handleClick}>
                <Col xs md lg="2">{isClicked ? <BsHeartFill className="liked-btn" /> : <BsHeart />}</Col>
            </Row>
        </Container>
    )
}
