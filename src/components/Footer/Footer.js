import React from 'react';
import './footer.scss';
import TextField from '@material-ui/core/TextField';
import {footerLogo, footerInst, footerFacebook} from './svg/footerSvg';
import { NavHashLink as Link } from 'react-router-hash-link';
import {Button} from '@material-ui/core';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target.email.value);
    console.log(ev.target.value);
    const emailToSubscribe = ev.target.email.value;
    
    axios.post('/subscribers', {
      enabled: 'true',
      email: emailToSubscribe,
      letterSubject: 'Test letter (final project)',
      letterHtml: '<!DOCTYPE html><html lang=\'en\'> <head> <meta charset=\'UTF-8\' /> <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\' /> <meta http-equiv=\'X-UA-Compatible\' content=\'ie=edge\' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err.message);
    });
  };

  return (
    <div className='Footer'>
      <div className='Footer__wrapper'>
        <div className='Footer__container footer-mob'>
          <div className='Footer__logo'>{footerLogo}</div>
          <div>
            <p className='Footer__text'>Интернет Магазин</p>
            <div className='Footer__logo--links'>
              <a href='tel:0800212150' className='Footer__text Footer__link'>0 800 21 21 50</a>
              <a href='mailto:info@abcphoto.com.ua' className='Footer__text Footer__link'>info@abcphoto.com.ua</a>
            </div>
          </div>
        </div>
        <div className='Footer__container info-footer'>
          <p className='Footer__heading'>Покупателям</p>
          <Link
            className='info-link'
            to="/info#credit"
            activeClassName="selected"
            smooth={true}
          >
              Кредит
          </Link>
          <Link
            className='info-link'
            to="/info#shippingAndDelivery"
            activeClassName="selected"
            smooth={true}
            style={{width: '12%'}}
          >
            Доставка&nbsp;и&nbsp;оплата
          </Link>
          <Link
            className='info-link'
            to="/info#guarantee"
            activeClassName="selected"
            smooth={true}
          >
              Гарантии
          </Link>
        </div>
        <div className='Footer__container info-footer'>
          <p className='Footer__heading'>Связаться с нами</p>
          <Link
            className='info-link'
            to="/info#contacts"
            activeClassName="selected"
            smooth={true}
          >
              Контакты
          </Link>
        </div>
        <div className='Footer__container--right'>
          <p className='Footer__heading'>Подписаться на рассылку</p>
          <div className='Footer__input'>
            <form autoComplete="off" className='subscribe-form' onSubmit={(ev) => handleSubmit(ev)}>
              <Grid container className='subscribe_grid'>
                <TextField
                  name='email'
                  label="Email"
                  variant="outlined"
                  type='email'
                  required/>
                <Button type='submit' variant='outlined' color='primary' className='btn btn-subscribe'>Подписаться </Button>
              </Grid>

            </form>

          </div>
          <div className='Footer__icons-wrapper'>
            <span>Мы в социальных сетях</span>
            <div><a href='https://www.instagram.com/abc_photo.online_shop/'>{footerInst}</a></div>
            <div><a href='https://www.facebook.com/ABC-photo-106559144478893'>{footerFacebook}</a></div>
          </div>
        </div>
      </div>
      <hr className='Footer__hr'/>
      <span className='Footer__bottom-text'>©abcphoto 2020 - Все права защищены.</span>
    </div>
  );
};

export default Footer;