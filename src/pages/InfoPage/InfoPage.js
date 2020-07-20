import React from 'react';
import Credit from './Credit/Credit';
import ShippingAndDelivery from './ShippingAndDelivery/ShippingAndDelivery';
import Guarantee from './Guarantee/Guarantee';

const InfoPage = () => {
  return (
    <div>
      <Credit />
      <ShippingAndDelivery />
      <Guarantee />
    </div>
  );
};

export default InfoPage;