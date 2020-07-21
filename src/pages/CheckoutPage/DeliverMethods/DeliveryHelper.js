import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const DeliveryHelper = ({
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
        <FormControlLabel
          value="self"
          control={<Radio />}
          label="Самовывоз из пункта выдачи"
        />
        {/*  <SelectInput disabled={isActiveSelect}/> */}

        <FormControlLabel
          value="nova-poshta"
          control={<Radio/>}
          label="Новая почта (в отделение)"
        />
        <FormControlLabel
          value="courier"
          control={<Radio />}
          label="Курьерская доставка"
        />
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <>{errors[fieldName]}</>
      )}
    </>
  );
};

export default DeliveryHelper;
