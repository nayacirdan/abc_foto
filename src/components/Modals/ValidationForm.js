import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SignAndRegForm } from './SignAndRegForm';

const validationSchema = Yup.object({
  name: Yup.string('Enter a name').required('Name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phone: Yup.string('Enter your phone')
    .min(10, 'Phone must contain at least 10 characters')
    .required('Enter your phone number'),
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
  confirmPassword: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
});

class InputForm extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  submit = (data) => {
    console.log(data);
  };

  render () {
    // const classes = this.props;
    const values = {
      name: '',
      email: '',
      phone: '',
      confirmPassword: '',
      password: ''
    };
    return (
      <>
        <Formik
          render={(props) => <SignAndRegForm {...props} />}
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={this.submit}
        />
      </>
    );
  }
}

export default InputForm;
