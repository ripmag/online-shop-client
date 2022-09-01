import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'

const NavBar = observer( () => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Мой Магазин</Navbar.Brand>
                { user.isAuth ?

                <Nav className="ml-auto">                    
                    <Nav.Link href="#home">Home</Nav.Link>
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
