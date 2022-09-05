import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { SHOP_ROUTE ,ADMIN_ROUTE,LOGIN_ROUTE, BASKET_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import { check } from '../http/userAPI';

const NavBar = observer( () => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    //console.log(user)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')        
    }
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Мой Магазин</Navbar.Brand>
                { user.isAuth ?

                <Nav className="ml-auto">                    
                <div>{user.name}</div>
                    <Button onClick={()=> navigate(ADMIN_ROUTE)}>Админ панель</Button>                    
                    <Button onClick={() => navigate(BASKET_ROUTE)}>Корзина</Button>
                    <Button onClick={() => logOut()}>Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto">                    
                    <Button onClick={()=> navigate(LOGIN_ROUTE)}>Авторизация</Button>                    
                </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;
