import React from 'react';
import './footer.scss';
import TextField from '@material-ui/core/TextField';
import {footerLogo, footerInst, footerFacebook} from './svg/footerSvg';
import { NavHashLink as Link } from 'react-router-hash-link';
import {Button} from '@material-ui/core';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {toggleSubscribeFailedModal, toggleSubscribeOKModal} from '../../store/actions/actions';
import {useDispatch} from 'react-redux';
import SubscribeFailedModal from '../Modals/SubscribeFailedModal';
import SubscribeOKModal from '../Modals/SubscribeOKModal';
import {subscribeLetter} from './subsctibe-letter';

const Footer = () => {
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const emailToSubscribe = ev.target.email.value;
    
    axios.post('http://codeandcatchfire.kiev.ua:5010/subscribers', {
      enabled: 'true',
      email: emailToSubscribe,
      letterSubject: 'You are subscribed',
      letterHtml: subscribeLetter
    }).then(res => {
      dispatch(toggleSubscribeOKModal(true));
    }).catch(err => {
      console.log(err.message);
      dispatch(toggleSubscribeFailedModal(true));
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
      <div>
        <SubscribeFailedModal/>
        <SubscribeOKModal/>
      </div>
    </div>
  );
};

export default Footer;