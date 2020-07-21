import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import {Field} from 'formik';
import DeliveryHelper from '../DeliverMethods/DeliveryHelper';
import PaymentHelper from './PaymentHelper';

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('text1');
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleChangePaymentMethod = (event) => {
    const {value} = event.target;
    setPaymentMethod(value);
    if (value === 'text1') setIsActiveSelect(false);
  };

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
