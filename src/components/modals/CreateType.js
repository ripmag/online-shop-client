import React , {useState} from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addType = () =>{        
        createType({name:value}).then(data => {setValue('')})
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить новый тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                    value={value}
                    onChange = {e => setValue(e.target.value)}
                    placeholder='Введите название типа'
                    />
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={addType}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;