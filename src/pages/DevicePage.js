import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/red_star.png'

const DevicePage = () => {
    const device = { id: 1, name: "Galaxy S22", price: 1049, brandId: 3, typeId: 2, rating: 5, img: 'https://media.istockphoto.com/vectors/mock-up-screen-phone-vector-id1318420912' }
    const desc = [
        {id: 1, title: 'qwertyyuuuuuu',desc:'desc'},
        {id: 2, title: 'asdasdqwertyyuuuuuu',desc:'desc'},
        {id: 3, title: 'KJADFHLKJAFHLK',desc:'desc'},
        {id: 4, title: 'KDJFHKJDFH',desc:'desc'},
        {id: 5, title: 'ddd',desc:'xxx'}
    ]

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
                    <Image width={300} height={300} src={device.img} />
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
                    style={{ width:250, height:300}}>
                        <h3 className="text-center"> От: {device.price} EUR</h3>
                        <Button>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <h2>Характеристики:</h2>
                {desc.map((info ,index) =>
                    <Row key={info.id} style={{background: index%2 === 0 ? 'lightgray' : 'transparent'}} >
                        <h5>{info.title}: {info.desc}</h5>
                    </Row>
                    )}
            </Row>
        </Container>
    );
}

export default DevicePage;
