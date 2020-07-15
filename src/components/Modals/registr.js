import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import {signIn, register} from '../../store/actions/users/index';
import { openModal} from '../../store/actions/actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import EmailIcon from '@material-ui/icons/Email';
// import LockIcon from '@material-ui/icons/Lock';

const Registr = ({register, signIn, openModal, userRegister}) => {
  const validationSchema = Yup.object({
    // firstName: Yup.string('Enter First Name')
    //   .required('First Name is required'),
    // lastName: Yup.string('Enter Last Name')
    //   .required('Last Name is required'),
    // email: Yup.string('Enter an email')
    //   .email('Email is invalid')
    //   .required('Name is required'),
    // phone: Yup.string('Enter your phone number')
    //   .min(10, 'Phone must contain at least 10 characters'),
    // password: Yup.string('Enter your password')
    //   .min(7, 'Password must contain at least 7 characters')
    //   .required('Enter your password'),
    // confirmPassword: Yup.string('Enter your password')
    //   .min(7, 'Password must contain at least 7 characters')
    //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //   .required('Confirm Password is required'),
    // registered: Yup.boolean()
      
  });
    
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
    registered: true

  };
    
  const regSubmit = ({firstName, lastName, email, password, telephone }) => {
    debugger;
    const login = firstName;
    register(firstName, lastName, login, email, password, telephone);
    if (userRegister.registred) {
      signIn(email, password);
      openModal();
    } else {
      console.log(userRegister.registerError);
    }
  };
    
  return (
    <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={regSubmit}>
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched
      }) => (

        <form>
          <TextField
            name="firstName"
            label="Введите ваше имя: "
            variant="outlined"
            type='text'
            error={errors.firstName && touched.firstName}
            fullWidth
            value={values.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={(errors.firstName && touched.firstName) && errors.firstName} />

          <TextField
            name="lastName"
            label="Введите ваше фамилию: "
            variant="outlined"
            type='text'
            error={errors.lastName && touched.lastName}
            fullWidth
            value={values.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={(errors.lastName && touched.lastName) && errors.lastName} />

          <TextField
            name="email"
            label="Введите вашу почту"
            variant="outlined"
            type='email'
            error={errors.email && touched.email}
            fullWidth
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={(errors.email && touched.email) && errors.email}
          />

          <TextField
            name="telephone"
            label="Введите ваш номер телефона"
            variant="outlined"
            type='text'
            error={errors.telephone && touched.telephone}
            fullWidth
            value={values.telephone}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={(errors.telephone && touched.telephone) && errors.telephone} />

          <TextField
            name="password"
            label="Введите ваш пароль"
            variant="outlined"
            type='password'
            error={errors.password && touched.password}
            fullWidth
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={(errors.password && touched.password) && errors.password}/>

          <TextField
            name="confirmPassword"
            label="Подтвердите ваш пароль"
            variant="outlined"
            type='password'
            error={errors.confirmPassword && touched.confirmPassword}
            fullWidth
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={(errors.confirmPassword && touched.confirmPassword) && errors.confirmPassword}/>

          <Button
            type="submit"
            color="primary"
            variant="outlined"
            onClick={handleSubmit}>
            Зарегистрироваться
          </Button>
        </form>
      )}
    
    </Formik >
  );
};

const mapStateToProps = ({userRegister}) => {
  return {
    userRegister
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    register: (firstName, lastname, email, login, password, telephone) => dispatch(register(firstName, lastname, email, login, password, telephone)),
    openModal: () => dispatch(openModal())
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Registr));