import Button from 'react-bootstrap/Button';

import FacebookLogo from './img/facebook-logo-2019.svg';
import GoogleLogo from './img/google.svg';

import './SocialMediaButtons.css';

export function SocialMediaButtons() {
    return (
        <div className='d-flex justify-content-around mb-3'>
            <Button className='d-flex align-items-center btn-social-media' variant="outline-dark">
                <img className="facebook me-2" src={FacebookLogo} alt="Facebook" /> Facebook
            </Button>

            <Button className='d-flex align-items-center btn-social-media' variant="outline-dark">
                <img className="google me-2" src={GoogleLogo} alt="Google" /> Google
            </Button>
        </div>
    )
}