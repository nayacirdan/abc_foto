import React from 'react';
import './ShippingAndDelivery.scss';
import Delivery from './Delivery';
import Shipping from './Shipping';
import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: '#677283',
    fontSize: '14px'
  }
}));

const ShippingAndDelivery = () => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to="/info#shippingAndDelivery" >
      <div className='container shippingAndDelivery' id='shippingAndDelivery'>
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
    </Link>
  );
};

export default React.memo(ShippingAndDelivery);