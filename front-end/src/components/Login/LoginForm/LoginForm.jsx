import {
    AiFillEyeInvisible,
    AiFillEye
} from "react-icons/ai";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { notification } from 'antd';

import { useState } from "react";
import { Navigate } from 'react-router-dom';

import './LoginForm.css'

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLogged, setLogin] = useState(false);
    const [error, setError] = useState(false);

    function togglePassword() {
        if (!showPassword) {
            setShowPassword(true)
        } else {
            setShowPassword(false)
        }
    }

    async function handleLogin(event) {
        event.preventDefault()
        const userEmail = document.getElementById('userEmail').value
        const userPassword = document.getElementById('userPassword').value

        const loginData = {
            "email": userEmail,
            "password": userPassword
        }

        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        }

        const openNotificationWithIcon = (type) => {
            notification[type]({
                message: 'Senha e/ou usuário inválido.',
                description:
                    'Por favor, verifique as informações.',
            });
        }

        try {
            const response = await fetch('http://localhost:3000/users/login', options)

            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                localStorage.setItem('token', JSON.stringify(data.token))
                localStorage.setItem('userID', JSON.stringify(data.userID))
                setLogin(true)
            } else {
                openNotificationWithIcon('error')
            }

        } catch (error) {
            console.log(error)
        }
    }

    if (isLogged && !error) {
        return <Navigate to="/restaurantes" />
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3 mt-2" >
                    <Form.Control type="email" id="userEmail" placeholder="Digite seu e-mail" required />
                </Form.Group>

                <Form.Group className="mb-3 d-flex">
                    <InputGroup>
                        <Form.Control
                            type={showPassword ? "text" : "password"} id="userPassword" placeholder="Senha"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon2"
                            required
                        />
                        
                        <InputGroup.Text
                            id="btnGroupAddon2"
                            className="input-group-text"
                            onClick={togglePassword}>{showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="checkbox" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lembrar-me" />
                </Form.Group>

                <a className="forgot-password" href="/#">
                    <p>Esqueci minha senha</p>
                </a>

                <Button id="btn-enter" href='/#' onClick={handleLogin}>
                    Entrar
                </Button>
            </Form>
        </>
    )
}