import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/red_star.png'
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const history = useNavigate()    
    //console.log("HISTORY!!!")
    //console.log(history)
    return (
        <Col md={3} className={'mt-3'} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: "150px", cursor: 'pointer' }} >
                <Image width={150} height={150} src={device.img} />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>samsung</div>

                    <div className='d-flex' >
                        <div>{device.rating}</div>
                        <Image src={star} width={30} height={30} />
                    </div>

                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;