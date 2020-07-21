import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import SelectInput from '../../../components/SelectInput/SelectInput';
import {Field} from 'formik';

const DeliverMethods = () => {
  const [deliveryMethod, setDeliveryMethod] = React.useState('text7');
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleChangeDeliveryMethod = (event) => {
    const {value} = event.target;
    setDeliveryMethod(value);
    setIsActiveSelect(true);
    if (value === 'text7') setIsActiveSelect(false);
  };

  return (
    <div className="order-delivery">
      <h4 className="big-text">Способы доставки</h4>
      <Field component={RadioGroup} aria-label="deliveryMethod" name="deliveryMethod" value={deliveryMethod}
        onChange={handleChangeDeliveryMethod}>
        <FormControlLabel
          value="text7"
          control={<Radio/>}
          label="Самовывоз из пункта выдачи"
        />
        <SelectInput disabled={isActiveSelect}/>
        <FormControlLabel
          value="text8"
          control={<Radio/>}
          label="Новая почта (в отделение)"
        />
        <FormControlLabel
          value="text97"
          control={<Radio />}
          label="Курьерская доставка"
        />
      </Field>
    </div>
  );
};

export default DeliverMethods;
