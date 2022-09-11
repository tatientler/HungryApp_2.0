import './StoreType.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function StoreType() {
    return (
        <>
            <Container className='mb-4'>
                <Row className='store d-flex justify-content-evenly'>
                    <Col xs md="4" lg="2" className='store d-flex justify-content-center select'>Restaurantes</Col>
                    <Col xs md="4" lg="2" className='store d-flex justify-content-center'>Mercados</Col>
                    <Col xs md="4" lg="2" className='store d-flex justify-content-center'>Bebidas</Col>
                </Row>
            </Container>
        </>
    )
}
