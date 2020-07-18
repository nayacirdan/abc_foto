import React, {useEffect, useState} from 'react';
import {Formik, Form} from 'formik';
import FormInput from '../../components/FormInput/FormInput';
import SelectInput from '../../components/SelectInput/SelectInput';
import SimpleModal from '../../components/Modals/ConfirmOrderModal';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import './CheckoutPage.scss';

const mockCart = [
  {
    id: '5ef3312ff908ec14d96d8cbb',
    name: 'Canon eos 800d body black',
    price: 10999,
    imageURL: 'https://res.cloudinary.com/miratsiupiak/image/upload/v1592831004/products/canon_1/image_1_kw8g3l.jpg',
    article: 16875476
  },
  {
    id: '5ef33291f908ec14d96d8cbc',
    name: 'Nikon d780 body black',
    price: 15999,
    imageURL: 'https://res.cloudinary.com/miratsiupiak/image/upload/v1592831610/products/image_1_gppzkr.jpg',
    article: 21098736
  },
  {
    id: '5ef3331cf908ec14d96d8cbd',
    name: 'Sony Alpha 9 Body',
    price: 14399,
    imageURL: 'https://res.cloudinary.com/miratsiupiak/image/upload/v1592831783/products/sony_1/image_1_rg3aj8.jpg',
    article: 54637287
  }
];

function CheckoutPage (props) {
  const [deliveryMethod, setDeliveryMethod] = React.useState('text7');
  const [paymentMethod, setPaymentMethod] = React.useState('text1');
  const [isActiveSelect, setIsActiveSelect] = useState(false);
  const [products, setProducts] = useState([]);

  const getCartProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockCart), 1000);
    });
  };

  useEffect(() => {
    getCartProducts().then(result => {
      setProducts(result);
    });
  }, []);

  const handleChangeDeliveryMethod = (event) => {
    const {value} = event.target;
    setDeliveryMethod(value);
    setIsActiveSelect(true);
    if (value === 'text7') setIsActiveSelect(false);
  };

  const handleChangePaymentMethod = (event) => {
    const {value} = event.target;
    setPaymentMethod(value);
    if (value === 'text1') setIsActiveSelect(false);
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
        initialValues={{name: '', email: '', phone: ''}}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
        validate={validate}
      >
        {({values, errors, touched, handleSubmit}) => (
          <div className="checkout-group">
            <div className="order-container">
              <Form className="checkout-form" autoComplete="off">
                <div className="block-title">
                  <h4 className="big-text">Контактные данные</h4>
                  <h6 className="small-text">* Поля, обязательные для заполнения</h6>
                </div>
                <FormInput label="Имя получателя *" type="text" name="name" placeholder="Иван Петрович"/>
                {errors.email && touched.email ? <div className="error-text">{errors.name}</div> : null}
                <FormInput label="Телефон *" type="text" name="phone" placeholder="050 555 55 55"/>
                {errors.email && touched.email ? <div className="error-text">{errors.phone}</div> : null}
                <FormInput label="E-mail *" type="email" name="email" placeholder="Ivanov444@gmail.com"/>
                {errors.email && touched.email ? <div className="error-text">{errors.email}</div> : null}
                <div className="order-delivery">
                  <h4 className="big-text">Способы доставки</h4>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="deliveryMethod" name="deliveryMethod" value={deliveryMethod}
                      onChange={handleChangeDeliveryMethod}>
                      <FormControlLabel value="text7" control={<Radio/>} label="Самовывоз из пункта выдачи"/>
                      <SelectInput disabled={isActiveSelect}/>
                      <FormControlLabel value="text8" control={<Radio/>} label="Новая почта (в отделение)"/>
                      <FormControlLabel value="text9" control={<Radio/>} label="Курьерская доставка"/>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="order-payment">
                  <h4 className="big-text">Способы оплаты</h4>
                  <FormControl component="fieldset" className="radio-group">
                    <RadioGroup aria-label="paymentMethod" name="paymentMethod" value={paymentMethod}
                      onChange={handleChangePaymentMethod}>
                      <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <Box textAlign="left">
                          <FormControlLabel value="text1" control={<Radio/>} label="Наличными при получении"/>
                          <FormControlLabel value="text2" control={<Radio/>} label="Картой при получении"/>
                          <FormControlLabel value="text3" control={<Radio/>} label="Безналичный расчет"/>
                        </Box>
                        <Box textAlign="left">
                          <FormControlLabel value="text4" control={<Radio/>} label="Кредит Альфа Банк"/>
                          <FormControlLabel value="text5" control={<Radio/>} label="Кредит Credit Agricole"/>
                          <FormControlLabel value="text6" control={<Radio/>} label="Кредит УКРСИББАНК"/>
                        </Box>
                      </Box>
                    </RadioGroup>
                  </FormControl>
                  <TextField className="comments" type="text" multiline rows={4} placeholder="Комментарий" variant="outlined"/>
                </div>
              </Form>
            </div>
            <div>
              <div className="big-text checkout-title">Товары в корзине</div>
              <div className="checkout-container">
                {products.map((product, i) => (
                  <div className="checkout-item" key={`${product.imageURL}${i}`}>
                    <img className="checkout-item-image" src={product.imageURL}
                      alt="checkout-item"/>
                    <div className="item-description">
                      <span className="item-description-title">{product.name}</span>
                      <span className="item-description-code">Код товара: {product.article}</span>
                    </div>
                    <div className="checkout-item-price">{product.price}</div>
                  </div>
                ))}
                <div className="order-sum">Сумма заказа: 41 397 грн </div>
                <SimpleModal/>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutPage;
