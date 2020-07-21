import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';

const PaymentHelper = ({
  field,
  form: { touched, errors },
  name,
  options,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <>
      <RadioGroup {...field} {...props} name={fieldName}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box textAlign="left">
            <FormControlLabel value="cash" control={<Radio/>} label="Наличными при получении"/>
            <FormControlLabel value="card" control={<Radio/>} label="Картой при получении"/>
            <FormControlLabel value="text3" control={<Radio/>} label="Безналичный расчет"/>
          </Box>
          <Box textAlign="left">
            <FormControlLabel value="credit-Alfa-Bank" control={<Radio/>} label="Кредит Альфа Банк"/>
            <FormControlLabel value="credit-Credit-Agricole" control={<Radio/>} label="Кредит Credit Agricole"/>
            <FormControlLabel value="credit-Ukrsibbank" control={<Radio/>} label="Кредит УКРСИББАНК"/>
          </Box>
        </Box>
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <>{errors[fieldName]}</>
      )}
    </>
  );
};

export default PaymentHelper;
