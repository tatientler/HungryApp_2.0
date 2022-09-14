import { useState } from "react";
import { Navigate } from 'react-router-dom';

import { Formik } from "formik"
import {
    SubmitButton,
    Input,
    Form,
    FormItem
} from "formik-antd";

import { Row } from "antd";
import { notification } from 'antd';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import './LoginForm.css';

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
            const response = await fetch('https://hungry--app.herokuapp.com/users/login', options)
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
        return value ? undefined : "*Obrigatório"
    }

    return (
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
                <Form className="mb-3 mt-3">
                    <Row gutter={[8, 8]}>
                        <FormItem
                            name={'email'}
                            required={true}
                            validate={validateRequired}
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
                        >
                            <Input.Password
                                name={'password'}
                                placeholder="Senha"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </FormItem>
                    </Row>

                    <SubmitButton id="btn-enter" className="mt-3">
                        Entrar
                    </SubmitButton>

                    <a className="forgot-password" href="/#">
                        <p>Esqueci minha senha</p>
                    </a>
                </Form>
            )}
        />
    )
}
