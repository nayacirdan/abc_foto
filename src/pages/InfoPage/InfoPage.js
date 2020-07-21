import React from 'react';
import Credit from './Credit/Credit';
import ShippingAndDelivery from './ShippingAndDelivery/ShippingAndDelivery';
import Guarantee from './Guarantee/Guarantee';
import Contacts from './Contacts/Contacts';

const InfoPage = () => {
  return (
    <div>
      <Credit />
      <ShippingAndDelivery />
      <Guarantee />
      <Contacts />
    </div>
  );
};

export default React.memo(InfoPage);