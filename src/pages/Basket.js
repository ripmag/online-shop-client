import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import BasketItem from '../components/BasketItem';
import { fetchBasket } from '../http/basketAPI';
import { Context } from '../index';

const Basket = () => {
  //const {device} = useContext(Context)
  const [devicesFromBasket, setDevice] = useState([])
  const { user } = useContext(Context)



  useEffect(() => {
    fetchBasket(user.user.id).then(data => setDevice(data))
  }, [])
  console.log(devicesFromBasket)


  return (
    <Container>
      <h2 className="text-center">Корзина {user.user.name}</h2>

      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>Наименование товара</th>
            <th></th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {devicesFromBasket.map(device =>            
              <BasketItem key={device.device.id} device={device.device} />            
          )}
        </tbody>
      </Table>

    </Container>
  );
}

export default Basket;
