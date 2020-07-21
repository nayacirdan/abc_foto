import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import {Field} from 'formik';

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
      <FormControl component="fieldset" className="radio-group">
        <Field component={RadioGroup} aria-label="paymentMethod" name="paymentMethod" value={paymentMethod}
          onChange={handleChangePaymentMethod}>
          <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box textAlign="left">
              <FormControlLabel value="text1" control={<Radio/>} label="Наличными при получении"/>
              <FormControlLabel value="text2" control={<Radio/>} label="Картой при получении"/>
              <FormControlLabel value="text3" control={<Radio/>} label="Безналичный расчет"/>
            </Box>
            <Box textAlign="left">
              <FormControlLabel value="text4" control={<Radio/>} label="Кредит Альфа Банк"/>
              <FormControlLabel value="text5" control={<Radio/>} label="Кредит Credit Agricole"/>
              <FormControlLabel value="text6" control={<Radio/>} label="Кредит УКРСИББАНК"/>
            </Box>
          </Box>
        </Field>
      </FormControl>
      <TextField className="comments" type="text" multiline rows={4} placeholder="Комментарий" variant="outlined"/>
    </div>
  );
};

export default PaymentMethods;
