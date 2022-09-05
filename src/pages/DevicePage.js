import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import star from '../assets/red_star.png'
import { addToBasket } from '../http/basketAPI';
import { fetchOneDevice } from '../http/deviceAPI';
import { Context } from '../index';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    const { user } = useContext(Context)
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    const toBasket = (deviceId, userId) => {
        const formData = new FormData()
        formData.append('deviceId', deviceId)
        formData.append('basketId', userId)
        addToBasket(formData)
    }    

    const mystyle = {
        fontSize: 88,
        backgroundImage: "url(" + star + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: 250,
        width: 250
    }

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4} className='d-flex align-items-center justify-content-center'>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex justify-content-center'>
                        <h2 className="text-center">{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={mystyle}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 250, height: 300 }}>
                        <h3 className="text-center"> От: {device.price} EUR</h3>
                        <Button
                            onClick={() => toBasket(device.id, user.user.id)}
                        >Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <h2>Характеристики:</h2>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent' }} >
                        <h5>{info.title}: {info.desc}</h5>
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;
