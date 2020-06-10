import React from 'react';
import Grid from "@material-ui/core/Grid";

import './footer.scss'
import TextField from "@material-ui/core/TextField";
import {footerLogo, footerInst , footerFacebook} from "./svg/footerSvg";

const Footer = () => {
    return (
        <div className='Footer'>
            <Grid container spacing={2}>
                    <Grid item md={2}>
                        <div className='Footer__container'>
                            <p className='Footer__logo'>{footerLogo}</p>
                            <p className='Footer__text'>Интернет Магазин</p>
                            <p className='Footer__text'>0 800 21 21 50</p>
                            <p className='Footer__text'>info@abcphoto.com.ua</p>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div className='Footer__container'>
                            <p className='Footer__heading'>Информация</p>
                            <p className='Footer__text'>О Компании</p>
                            <p className='Footer__text'>Карта Сайта</p>
                            <p className='Footer__text'>Публичная Оферта</p>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div className='Footer__container'>
                            <p className='Footer__heading'>Покупателям</p>
                            <p className='Footer__text'>Кредит</p>
                            <p className='Footer__text'>Доставка И Оплата</p>
                            <p className='Footer__text'>Сервис И Гарантии</p>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div className='Footer__container'>
                            <p className='Footer__heading'>Связаться С Нами</p>
                            <p className='Footer__text'>Контакты</p>
                            <p className='Footer__text'>Магазины</p>
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
                                    <div>{footerInst}</div>
                                    <div>{footerFacebook}</div>
                            </div>
                        </div>
                    </Grid>
                <hr className='Footer__hr'/>
                <Grid item md={12}>
                    <span className='Footer__bottom-text'>© abcphoto 2020 - Все права защищены.</span>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;