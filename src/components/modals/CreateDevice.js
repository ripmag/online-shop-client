import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { observer } from 'mobx-react-lite';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, { title: '', desc: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(item => item.number === number ? { ...item, [key]: value } : item))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('img',file)
        formData.append('brandId',device.selectedBrand.id)
        formData.append('typeId',device.selectedType.id)
        formData.append('info',JSON.stringify(info))
        createDevice(formData).then(data => onHide())       
    }

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])




    return (
        <Modal
            show={show}
            onHide={onHide}
            animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить девайс</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2'>
                        <DropdownToggle>{device.selectedType.name || "Выберете тип"}</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <DropdownToggle>{device.selectedBrand.name || "Выберете фирму"}</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} className='mt-2' placeholder='Введите название устройства' />
                    <Form.Control value={price} onChange={e => setPrice(Number(e.target.value))} className='mt-2' placeholder='Введите цену' type='number' />
                    <Form.Control onChange={selectFile} className='mt-2' type='file' />
                    <hr />
                    <Button onClick={addInfo}
                    >Добавить дополнительное описание</Button>
                    {info.map(i =>
                        <Row className='mt-2' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите название свойства'
                                    value={i.title}
                                    onChange={e => changeInfo('title', e.target.value, i.number)} />
                            </Col>
                            <Col md={4}>
                                <Form.Control                                
                                    placeholder='Введите описание свойства'
                                    value={i.desc}
                                    onChange={e=>{changeInfo('desc', e.target.value, i.number)}} />
                            </Col>
                            <Col>
                                <Button onClick={() => removeInfo(i.number)} variant='outline-danger'>Удалить</Button>
                            </Col>
                        </Row>

                    )}


                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={addDevice}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;