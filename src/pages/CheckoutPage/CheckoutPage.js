import React from 'react';
import {Formik, Form, Field} from 'formik';
import SimpleModal from '../../components/Modals/ConfirmOrderModal';
import TextField from '@material-ui/core/TextField';
import './CheckoutPage.scss';
import {toggleOrderModal} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import DeliverMethods from './DeliverMethods/DeliverMethods';
import PaymentMethods from './PaymentMethods/PaymentMethods';
import {Button} from '@material-ui/core';
import axios from 'axios';
import {productsNotJson} from './c';
import ItemsInCart from './ItemsInCart/ItemsInCart';

function CheckoutPage () {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.getCustomer.customerInfo);
  const productsInCart = useSelector(state => state.cartReducer.cartInfo);
  console.log(productsInCart);
  console.log(customer._id);
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

  const NAC_data = {
    email: 'ksusha.cirdan@gmail.com',
    mobile: '0937699607',
    letterSubject: 'Thank you for order! You are welcome!',
    letterHtml: '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
    canceled: false,
    products: JSON.stringify(productsNotJson)
  };

  const AC_data = {
    customerId: customer._id || '5f1318029ba9f42208815d10',
    email: 'ksusha.cirdan@gmail.com',
    mobile: '0937699607',
    letterSubject: 'Thank you for order! You are welcome!',
    letterHtml: '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
    canceled: false,
    products: []
  };

  console.log(JSON.stringify(NAC_data));
  console.log(JSON.stringify(AC_data));

  const sendOrderNAC = () => {
    axios.post('/orders', NAC_data)
      .then(newOrder => {
        console.log('NAC', newOrder.data);
        /* Do something with newOrder */
      })
      .catch(err => {
        console.log('NAC', err, err.message);
        /* Do something with error, e.g. show error to user */
      });
  };

  const sendOrderAC = () => {
    axios.post('/orders', AC_data)
      .then(newOrder => {
        console.log('AC', newOrder.data);
        /* Do something with newOrder */
      })
      .catch(err => {
        console.log('AC', err, err.message);
        /* Do something with error, e.g. show error to user */
      });
  };

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
    } else if (!/^\d{10}$/i.test(values.phone) || values.phone.length !== 10) {
      errors.phone = 'Invalid phone number';
    }

    if (!values.name) errors.name = 'Required';

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
        onSubmit={(values) => handleSubmit(values)}
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
                  as={TextField}
                  className="comments"
                  type="text"
                  multiple
                  rows={4}
                  placeholder="Комментарий"
                  variant="outlined"
                  name="comment"
                />
              </Form>
            </div>

            {/* Items In Cart */}
            <ItemsInCart submitBtnFunc={submitForm}/>
            {/*      <SimpleModal onClick={submitForm}/> */}
            {/*     <Button type='button' onClick={sendOrderNAC}>Не авторизированный</Button>
            <Button type='button' onClick={sendOrderAC}>Авторизированный</Button> */}
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutPage;
