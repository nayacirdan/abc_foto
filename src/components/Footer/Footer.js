import React from 'react';
import './footer.scss';
import TextField from '@material-ui/core/TextField';
import {footerLogo, footerInst, footerFacebook} from './svg/footerSvg';
import { NavHashLink as Link } from 'react-router-hash-link';

const Footer = () => {
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
            <TextField
              name='mail'
              label="Email"
              variant="outlined"/>
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