import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';

export const ChangeUserData = () => {
  const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 'inherit',
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(2)
      },
      '@media (min-width:320px) and (max-width: 780px)': {
        display: 'block'
      }
    }
  }));
  const classes = useStyles();

  return (
    <>
      <h3 className="personal-heading-text">Профиль пользователя</h3>
      <Grid container className="personal-grid-container">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            sex: '',
            tel: ''
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .required('First Name is required'),
            lastName: Yup.string()
              .required('Last Name is required'),
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            sex: Yup.string()
              .min(6, 'Sex must be at least 6 characters')
              .required('Sex is required'),
            tel: Yup.string()
              .min(6, 'Phone must be at least 11 characters')
              .required('Phone is required')
          })}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className={classes.form}>
            <Grid item className="personal-grid-item change-password">
              <label htmlFor="firstName" className='personal-field-label'>Имя</label>
              <Field
                id="firstName"
                name="firstName"
                className='personal-field-input'
                placeholder='Иван'
              />
              <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>

              <label htmlFor="lastName" className='personal-field-label'>Фамилия</label>
              <Field
                id="lastName"
                name="lastName"
                className='personal-field-input'
                placeholder='Иванов'
              />
              <ErrorMessage name="lastName" component="div" className="invalid-feedback"/>

              <label htmlFor="sex" className='personal-field-label'>Пол</label>
              <Field
                id="sex"
                name="sex"
                className='personal-field-input'
                placeholder='Мужской'
              />
              <ErrorMessage name="sex" component="div" className="invalid-feedback"/>
              <button
                type="submit"
                className="personal-form-btn d-none"
              >ГОТОВО
              </button>
            </Grid>
            <Grid item className="personal-grid-item">
              <label htmlFor="tel" className='personal-field-label'>Номер телефона</label>
              <Field
                id="tel"
                name="tel"
                placeholder='Номер телефона'
                className='personal-field-input'
              />
              <ErrorMessage name="tel" component="div" className="invalid-feedback"/>

              <label htmlFor="email" className='personal-field-label'>E-mail</label>
              <Field
                id="email"
                name="email"
                placeholder='E-mail'
                className='personal-field-input'
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback"/>
              <button
                type="submit"
                className="personal-form-btn d-block"
              >ГОТОВО
              </button>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </>
  );
};