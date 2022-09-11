import MarketingImage from "./img/mkt.png"
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import './Marketing.css'

export function Marketing() {
    return (
        <Container className="mt-3">
            <Image fluid 
                className="mkt-img" src={MarketingImage} 
                alt="Ilustração de marketing com descontos atuais disponíveis." 
            />
        </Container>
    )
}