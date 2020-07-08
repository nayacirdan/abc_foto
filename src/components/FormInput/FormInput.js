import React from 'react';
import './FormInput.scss';

function FormInput ({ label, type, placeholder }) {
  return (
    <div className="form-control">
      <label className="label">{label}</label>
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  );
}

export default FormInput;