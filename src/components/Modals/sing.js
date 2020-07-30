import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {signIn} from '../../store/actions/users/index';
import { openModal} from '../../store/actions/actions';

const Sing = ({signIn, userSignin, openModal}) => {
  const validationSchema = Yup.object({
    email: Yup.string('Enter an email')
      .required('You should enter email to sign in'),
    password: Yup.string('Enter your password')
      .min(7, 'Your password cannot be shorter than 7 characters')
      .required('You should enter password to sign in')
  });

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = ({email, password}) => {
    signIn(email, password);

    if (userSignin.error) {
      console.log(userSignin.error);
    } else {
      console.log('Fuck good');
      openModal();
    }
  };

  return (
    <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched
      }) => (
        <form >
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
            helperText={(errors.email && touched.email) && errors.email} />

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
            helperText={(errors.password && touched.password) && errors.password} />

          <Button
            type="submit"
            color="primary"
            variant="outlined"
            onClick={handleSubmit}>
            Войти
          </Button>

        </form>
      )}

    </Formik >
  );
};

const mapStateToProps = ({userSignin}) => {
  return {
    userSignin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    openModal: () => dispatch(openModal())
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Sing));