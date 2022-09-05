import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchTypes, fetchDevices } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const { device } = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        console.log("device: ",device.selectedBrand)

        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {            
                device.setDevices(data.rows)
                device.setTotalCount(data.count)            
        })


    }, [device.page, device.selectedBrand, device.selectedType])

    //console.log(device)
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>

            </Row>
        </Container>
    );
})

export default Shop;
