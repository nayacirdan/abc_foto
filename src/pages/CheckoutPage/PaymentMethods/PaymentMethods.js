import React from 'react';
import {Field} from 'formik';
import PaymentHelper from './PaymentHelper';

const PaymentMethods = () => {
/*  const [paymentMethod, setPaymentMethod] = React.useState('text1');
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleChangePaymentMethod = (event) => {
    const {value} = event.target;
    setPaymentMethod(value);
    if (value === 'text1') setIsActiveSelect(false);
  }; */

  return (
    <div className="order-payment">
      <h4 className="big-text">Способы оплаты</h4>
      <Field
        name="paymentMethod"
        component={PaymentHelper}
      />

    </div>
  );
};

export default PaymentMethods;
