import React from 'react';
import Grid from '@material-ui/core/Grid';

import './footer.scss';
import TextField from '@material-ui/core/TextField';
import {footerLogo, footerInst, footerFacebook} from './svg/footerSvg';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <div className='Footer__container'>
            <p className='Footer__logo'>{footerLogo}</p>
            <p className='Footer__text'>Интернет Магазин</p>
            <a href='tel:0800212150' className='Footer__text Footer__link'>0 800 21 21 50</a>
            <a href='mailto:info@abcphoto.com.ua' className='Footer__text Footer__link'>info@abcphoto.com.ua</a>
          </div>
        </Grid>
        <Grid item md={2}>
          <div className='Footer__container'>
            <p className='Footer__heading'>Информация</p>
            <Link to='/about' className='Footer__link'>О компании</Link>
            <Link to='/public' className='Footer__link'>Публичная оферта</Link>
          </div>
        </Grid>
        <Grid item md={2}>
          <div className='Footer__container'>
            <p className='Footer__heading'>Покупателям</p>
            <Link to='/credit' className='Footer__link'>Кредит</Link>
            <Link to='/delivery' className='Footer__link'>Доставка и оплата</Link>
            <Link to='/guarantee' className='Footer__link'>Сервис и гарантии</Link>
          </div>
        </Grid>
        <Grid item md={2}>
          <div className='Footer__container'>
            <p className='Footer__heading'>Связаться с нами</p>
            <Link to='/contacts' className='Footer__link'>Контакты</Link>
            <Link to='/shops' className='Footer__link'>Магазины</Link>
          </div>
        </Grid>
        <Grid item md={4}>
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
              <div><a href='https://www.facebook.com/'>{footerInst}</a></div>
              <div><a href='https://www.instagram.com/'>{footerFacebook}</a></div>
            </div>
          </div>
        </Grid>
        <hr className='Footer__hr'/>
        <Grid item md={12}>
          <span className='Footer__bottom-text'>©abcphoto 2020 - Все права защищены.</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;