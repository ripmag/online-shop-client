import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info,{title: '', desc:'', number:Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i=>i.number!==number))
    }


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
                        <DropdownToggle>Выберете тип</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem key={type.id}>{type.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <DropdownToggle>Выберете фирму</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control className='mt-2' placeholder='Введите название устройства' />
                    <Form.Control className='mt-2' placeholder='Введите цену' type='number' />
                    <Form.Control className='mt-2' type='file' />
                    <hr />
                    <Button onClick={addInfo}
                    >Добавить дополнительное описание</Button>
                    {info.map(i =>
                        <Row className='mt-2' key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder='Введите название свойства' />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Введите описание свойства' />
                            </Col>
                            <Col>
                            <Button onClick={() =>removeInfo(i.number)} variant='outline-danger'>Удалить</Button>
                            </Col>
                        </Row>

                    )}


                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={onHide}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;