import {
    BsShop,
    BsCurrencyDollar,
    BsCreditCard,
    BsPatchCheckFill
} from "react-icons/bs";
import { AiOutlineEnvironment } from "react-icons/ai";

import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';

import './BadgeFilter.css'

export function BadgeFilter() {
    return (
        <Container className="badge-filter d-flex mb-4">
            <Badge bg="badge" text="dark" className="p-2 ps-3 pe-3 me-3">
                <BsShop className="shopping-icon" />&nbsp;
                Para retirar
            </Badge>

            <Badge bg="badge" text="dark" className="p-2 ps-3 pe-3 me-3">
                <BsCurrencyDollar className="dollar-icon" />&nbsp;
                Entrega grátis
            </Badge>

            <Badge bg="badge" text="dark" className="p-2 ps-3 pe-3 me-3">
                <BsCreditCard className="card-icon" />&nbsp;
                Vale-refeição
            </Badge>

            <Badge bg="badge" text="dark" className="p-2 ps-3 pe-3 me-3">
                <AiOutlineEnvironment className="location-icon" />&nbsp;
                Distância
            </Badge>

            <Badge bg="badge" text="dark" className="p-2 ps-3 pe-3">
                <BsPatchCheckFill className="check-icon" />&nbsp;
                Super-restaurantes
            </Badge>
        </Container>
    )
}
