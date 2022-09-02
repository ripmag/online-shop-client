import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { SHOP_ROUTE ,ADMIN_ROUTE,LOGIN_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';

const NavBar = observer( () => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Мой Магазин</Navbar.Brand>
                { user.isAuth ?

                <Nav className="ml-auto">                    
                    <Button onClick={()=> navigate(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button onClick={()=> navigate(LOGIN_ROUTE)}>Логин</Button>


                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>                    
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                :
                <Nav className="ml-auto">                    
                    <Button onClick={()=> user.setIsAuth(true)}>Авторизация</Button>
                    <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;
