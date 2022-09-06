import {
    AiFillEyeInvisible,
    AiFillEye
} from "react-icons/ai";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { notification } from 'antd';

import { useState } from "react";

import './LoginForm.css'

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    function togglePassword() {
        if (!showPassword) {
            setShowPassword(true)
        } else {
            setShowPassword(false)
        }
    }

    function openNotificationWithIcon(type) {
        notification[type]({
            message: 'Senha e/ou usuário inválido.',
            description:
                'Por favor, verifique as informações.',
        });
    };

    return (
        <>
            <Form>
                <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Digite seu e-mail" required />
                </Form.Group>

                <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                    <InputGroup>
                        <Form.Control
                            type={showPassword ? "text" : "password"} placeholder="Senha"
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

                <Button id="btn-enter" href='/#' onClick={() => openNotificationWithIcon('error')}>
                    Entrar
                </Button>
            </Form>
        </>
    )
}