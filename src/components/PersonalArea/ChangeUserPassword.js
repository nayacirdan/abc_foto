import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import * as Yup from 'yup';

export const ChangeUserPassword = () => {
  const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 'inherit',
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(2)
      }
    }
  }));
  const classes = useStyles();
  return (
    <>
      <h4 className="personal-heading-text">Сменить пароль</h4>
      <Grid container className="personal-grid-container">
        <Formik
          initialValues={{
            lastPassword: '',
            newPassword: '',
            confirmNewPassword: ''
          }}
          validationSchema={Yup.object().shape({
            lastPassword: Yup.string()
              .required('Last password is required'),
            newPassword: Yup.string()
              .required('No password provided.')
              .min(8, 'Password is too short.')
              .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            confirmNewPassword: Yup.string()
              .required('No password provided.')
              .min(8, 'Password is too short.')
              .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
              .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
          })}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className={classes.form}>
            <Grid item className="change-password">
              <label htmlFor="lastPassword" className='personal-field-label'>Текущий пароль</label>
              <Field
                id="lastPassword"
                name="lastPassword"
                className='personal-field-input change-password'
                placeholder='***'
              />
              <ErrorMessage name="lastPassword" component="div" className="invalid-feedback"/>

              <label htmlFor="newPassword" className='personal-field-label'>Новый пароль</label>
              <Field
                id="newPassword"
                name="newPassword"
                className='personal-field-input change-password'
                placeholder='***'
              />
              <ErrorMessage name="newPassword" component="div" className="invalid-feedback"/>

              <label htmlFor="confirmNewPassword" className='personal-field-label'>Подтверждение нового
                пароля</label>
              <Field
                id="confirmNewPassword"
                name="confirmNewPassword"
                className='personal-field-input change-password'
                placeholder='***'
              />
              <ErrorMessage name="confirmNewPassword" component="div" className="invalid-feedback"/>
              <button
                type="submit"
                className="personal-form-btn change-pass-btn"
              >ГОТОВО
              </button>
            </Grid>
          </Form>
        </Formik>
      </Grid>

    </>
  );
};