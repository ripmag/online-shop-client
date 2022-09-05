import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import star from '../assets/red_star.png'
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE, SHOP_ROUTE } from '../utils/consts';

const BasketItem = ({ device }) => {
    const history = useNavigate()
    
    
    return (
        <tr >
            <td></td>
            <td><h3>{device.name}</h3></td>
            <td onClick={() => history(DEVICE_ROUTE + '/' + device.id)} style={{ cursor: 'pointer' }}><Image width={70} height={70} src={process.env.REACT_APP_API_URL + device.img} /></td>
            <td><h3>{device.price}</h3></td>
            <td><Button onClick={() => history(SHOP_ROUTE )}>Удалить</Button></td>
        </tr>

    );
};

export default BasketItem;