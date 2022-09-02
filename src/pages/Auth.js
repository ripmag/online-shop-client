import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { NavLink, useLocation } from "react-router-dom"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container>
            <Form>
                <Row className="justify-content-md-center align-items-center">

                    <Col md="6">
                        <h2 className="text-center">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
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
                            <Form.Control type="password" placeholder="Password" />
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
                        <Button variant="primary" type="submit" ml="3">
                            {isLogin ? "Войти" : "Зарегестрироваться"}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Auth;
