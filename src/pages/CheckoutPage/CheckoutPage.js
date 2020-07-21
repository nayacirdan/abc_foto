import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import SimpleModal from '../../components/Modals/ConfirmOrderModal';
import TextField from '@material-ui/core/TextField';
import './CheckoutPage.scss';
import {toggleOrderModal} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import DeliverMethods from './DeliverMethods/DeliverMethods';
import PaymentMethods from './PaymentMethods/PaymentMethods';

function CheckoutPage () {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.getCustomer.customerInfo);
  let customerName;

  if (customer.firstName || customer.lastName) {
    customerName = `${customer.firstName} ${customer.lastName}`;
  }

  /* const getCartProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockCart), 1000);
    });
  }; */

  /* useEffect(() => {
    getCartProducts().then(result => {
      setProducts(result);
    });
  }, []); */
  
  const handleSubmit = (values) => {
    dispatch(toggleOrderModal(true));
    console.log('values=', values);
  };

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (
      !/^\d{10}$/i.test(values.phone)
    ) {
      errors.phone = 'Invalid phone number';
    }

    if (!values.name) errors.name = 'Invalid name';

    return errors;
  };

  return (
    <div className="order-wrapper">
      <h2 className="head-title">Оформление заказа</h2>
      <Formik
        initialValues={{
          name: customerName || '',
          email: customer.email || '',
          phone: customer.telephone || '',
          deliveryMethod: 'self',
          paymentMethod: 'cash'
        }}
        onSubmit = {(values) => handleSubmit(values)}
        validate={validate}
      >
        {({submitForm, values, errors, touched, handleSubmit}) => (
          <div className="checkout-group">
            <div className="order-container">
              <Form className="checkout-form" autoComplete="off">
                <PersonalInfo touched={touched} errors={errors} values={values}/>
                <DeliverMethods/>
                <PaymentMethods/>

                {/* NOT WORKING, DONT RECEIVE VALUE */}
                <Field
                  component={TextField}
                  className="comments"
                  type="text"
                  multiline rows={4}
                  placeholder="Комментарий"
                  variant="outlined"
                  name="comment"
                />
              </Form>
            </div>

            {/* Items In Cart */}
            <SimpleModal onClick={submitForm}/>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutPage;
