import React,{useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';


const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [devicedVisible, setDeviceVisible] = useState(false)
  return (
    <Container className="mt-1">
      <Button onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
      <Button onClick={() => setTypeVisible(true)}>Добавить тип</Button>
      <Button onClick={() => setDeviceVisible(true)}>Добавить девайс</Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateDevice show={devicedVisible} onHide={() => setDeviceVisible(false)}/>
    </Container>
  );
}

export default Admin;
