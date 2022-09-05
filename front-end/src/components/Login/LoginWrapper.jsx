import { SocialMediaButtons } from './SocialMediaButtons/SocialMediaButtons'
import { LoginForm } from './LoginForm/LoginForm'
import Container from 'react-bootstrap/Container';

import './LoginWrapper.css'

export function LoginWrapper() {
    return (
        <>
            <div className='bg-img'>
                <Container fluid className="login-wrapper p-5">
                    <h1 className="h1 mb-4">Falta pouco para matar a sua fome!</h1>
                    <div className="login d-flex flex-column">

                        <LoginForm />

                        <p className="option">-- Ou acesse com --</p>

                        <SocialMediaButtons />

                        <div className="new-user d-flex justify-content-center">
                            <p>Novo por aqui? <a href="/#">Cadastre-se agora</a>!</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}