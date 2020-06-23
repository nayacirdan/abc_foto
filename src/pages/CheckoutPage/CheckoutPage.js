import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import SelectInput from '../../components/SelectInput/SelectInput';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './CheckoutPage.scss';


function CheckoutPage (props) {
  const [value, setValue] = React.useState('text7');
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
    setIsActiveSelect(true);
    if (value === 'text7') setIsActiveSelect(false);
  };

  return (
      <div className="order-wrapper">
        <h2 className="head-title">Оформление заказа</h2>
        <div className="checkout-group">
          <div className="order-container">
            <form className="checkout-form" autoComplete="off">
              <div className="block-title">
                <h4 className="big-text">Контактные данные</h4>
                <h6 className="small-text">* Поля, обязательные для заполнения</h6>
              </div>
              <FormInput label="Имя получателя *" type="text" placeholder="Иван Петрович" />
              <FormInput label="Телефон *" type="text" placeholder="+38063 111 33 44" />
              <FormInput label="E-mail" type="email" placeholder="Ivanov444@gmail.com" />
              <div className="order-delivery">
                <h4 className="big-text">Способы доставки</h4>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="text7" control={<Radio />} label="Самовывоз из пункта выдачи" />
                      <SelectInput disabled={isActiveSelect}/>
                    <FormControlLabel value="text8" control={<Radio />} label="Новая почта (в отделение)" />
                    <FormControlLabel value="text9" control={<Radio />} label="Курьерская доставка" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="order-payment">
                <h4 className="big-text">Способы оплаты</h4>
                <FormControl component="fieldset" className="radio-group">
                  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                      <Box textAlign="left">
                        <FormControlLabel value="text1" control={<Radio />} label="Наличными при получении" />
                        <FormControlLabel value="text2" control={<Radio />} label="Картой при получении" />
                        <FormControlLabel value="text3" control={<Radio />} label="Безналичный расчет" />
                      </Box>
                      <Box textAlign="left">
                        <FormControlLabel value="text4" control={<Radio />} label="Кредит Альфа Банк" />
                        <FormControlLabel value="text5" control={<Radio />} label="Кредит Credit Agricole" />
                        <FormControlLabel value="text6" control={<Radio />} label="Кредит УКРСИББАНК" />
                      </Box>
                    </Box>
                  </RadioGroup>
                </FormControl>
                <input className="comments" type="text" placeholder="Комментарии" />
              </div>
            </form>
          </div>
          <div>
            <div className="big-text checkout-title">Товары в корзине</div>
            <div className="checkout-container">
              <div className="checkout-item">
                <img className="checkout-item-image" src="images/gallery_items/canon_1/image_1.jpg" alt="checkout-item"/>
                <div className="item-description">
                  <span className="item-description-title">Canon EOS 6D</span>
                  <span className="item-description-code">Код товара: 012212</span>
                </div>
                <div className="checkout-item-price">9 000 грн</div>
              </div>
              <div className="checkout-item">
                <img className="checkout-item-image" src="images/gallery_items/nikon_1/image_1.jpg" alt="checkout-item"/>
                <div className="item-description">
                  <span className="item-description-title">Nikon D40</span>
                  <span className="item-description-code">Код товара: 012212</span>
                </div>
                <div>18 000 грн</div>
              </div>
              <div className="checkout-item">
                <img className="checkout-item-image" src="images/gallery_items/canon_2/image_1.jpg" alt="checkout-item"/>
                <div className="item-description">
                  <span className="item-description-title">Canon EOS 6D</span>
                  <span className="item-description-code">Код товара: 015212</span>
                </div>
                <div>12 500 грн</div>
              </div>
              <div className="order-sum">Сумма заказа: </div>
              <Button className="checkout-container-button" variant="contained" color="#51AD33">Подтвердить</Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CheckoutPage;
