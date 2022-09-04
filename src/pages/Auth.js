import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Context } from '..';
import { registration, login } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            }
            else {
                data = await registration(email, password)

            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        }
        catch (err) {
            alert(err.response.data.message)

        }


    }



    return (
        <Container>
            <Form>
                <Row className="justify-content-md-center align-items-center">

                    <Col md="6">
                        <h2 className="text-center">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="6">

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="3">
                        <Form.Group controlId="formBasicCheckbox">
                            {isLogin ?
                                <div>
                                    Нет Аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                                </div>
                                :
                                <div>
                                    Есть Аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                                </div>
                            }
                        </Form.Group>
                    </Col>
                    <Col md="3">
                        <Button
                            onClick={click}

                            variant="primary"

                            ml="3">
                            {isLogin ? "Войти" : "Зарегестрироваться"}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
})

export default Auth;
