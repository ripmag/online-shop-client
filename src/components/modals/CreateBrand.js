import React,{useState} from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addBrand = () =>{        
        createBrand({name:value}).then(data => {setValue('')})
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить фирму</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                    placeholder='Введите название фирмы'
                    />
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={addBrand}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;