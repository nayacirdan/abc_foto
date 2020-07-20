import React from 'react';
import './ShippingAndDelivery.scss';
import Delivery from './Delivery';
import Shipping from './Shipping';

const ShippingAndDelivery = () => {
  return (
    <div className='container shippingAndDelivery'>
      <h1>Доставка и оплата</h1>
      <div>
        <h3>Способы доставки</h3>
        <Delivery />
      </div>
      <div>
        <h3>Способы оплаты</h3>
        <Shipping />
      </div>
    </div>
  );
};

export default ShippingAndDelivery;