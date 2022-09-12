

import { Formik } from "formik"
import {
    SubmitButton,
    Input,
    Form,
    FormItem
} from "formik-antd"
import {  message, Row } from "antd"

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


import { notification } from 'antd';

import { useState } from "react";
import { Navigate } from 'react-router-dom';

import './LoginForm.css'

export function LoginForm() {
    const [isLogged, setLogin] = useState(false);
    const [error, setError] = useState(false);


    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Senha e/ou usuário inválido.',
            description:
                'Por favor, verifique as informações.',
        });
    }

    async function handleLogin(data) {
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
 
        try {
            const response = await fetch('http://localhost:3000/users/login', options)
            if (response.status === 200) {
                const data = await response.json()
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

    function validateRequired(value) {
        return value ? undefined : "Obrigatório"
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={async (values, actions) => {
                    await handleLogin(values)
                    actions.setSubmitting(false)
                    actions.resetForm()
                }}
                render={() => (
                    <Form>
                        <Row gutter={[8, 8]}>
                            <FormItem
                                name={'email'}
                                required={true}
                                validate={validateRequired}
                                style={{width: '100%'}}
                            >
                                <Input
                                    name={'email'}
                                    type={'email'}
                                    placeholder='Digite seu e-mail'
                                    
                                />
                            </FormItem>
                        </Row>

                        <Row gutter={[8, 8]}>
                            <FormItem
                                name={'password'}
                                required={true}
                                validate={validateRequired}
                                style={{width: '100%'}}
                            >
                                <Input.Password
                                    name={'password'}
                                    placeholder="Senha"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </FormItem>
                        </Row>

                        <SubmitButton>
                            Salvar
                        </SubmitButton>

                    </Form>
                )}
            />
        </>
    )
}

/*
import {
    AiFillEyeInvisible,
    AiFillEye
} from "react-icons/ai";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
*/