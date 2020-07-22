import React from 'react';
import {Field} from 'formik';
import DeliveryHelper from './DeliveryHelper';

const DeliverMethods = () => {
/*  const [deliveryMethod, setDeliveryMethod] = React.useState('text7');
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleChangeDeliveryMethod = (event) => {
    const {value} = event.target;
    setDeliveryMethod(value);
    setIsActiveSelect(true);
    if (value === 'text7') setIsActiveSelect(false);
  }; */

  return (
    <div className="order-delivery">
      <h4 className="big-text">Способы доставки</h4>
      <Field
        name="deliveryMethod"
        component={DeliveryHelper}

      />
    </div>
  );
};

export default DeliverMethods;
