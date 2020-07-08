import React from 'react';
import {Field} from 'formik';
import './FormInput.scss';

function FormInput({label, type, placeholder, name}) {
  return (
      <div className="form-control">
        <label className="label">{label}</label>
        <Field className="input" type={type} placeholder={placeholder} name={name}/>
      </div>
  );
}

export default FormInput;