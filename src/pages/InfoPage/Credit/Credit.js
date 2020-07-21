import React from 'react';
import CreditConditions from './CreditConditions';
import InstallmentTerms from './InstallmentTerms';
import PartnerBanks from './PartnerBanks';

import './Credit.scss';

import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: '#000000',
    fontSize: '14px'
  }
}));

const Credit = () => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to="/info#credit" >
      <div className='container credit-block' id='credit'>
        <div>
          <h1>Покупка в кредит</h1>
          <p>
            Покупка в кредит — это просто! Ознакомьтесь с условиями, которые предлагают наши банки-партнеры.
          </p>
          <h3>Подписание договора</h3>
          <div>
            <p>
            Кредит оформляется в нашем магазине по адресу Киев, пр. С. Бандеры, 6 или по адресу, который согласовывается с менеджером банка:
            </p>
            <p>UKRSIBBANK — в отделениях банка,</p>
            <p>КредитМаркет и ПУМБ — в отделениях «Нова Пошта,</p>
            <p>Альфа-Банк — курьером по удобному для вас адресу после предварительного заполнения онлайн-анкеты</p>
          </div>
        </div>
        <div className='banks'>
          <h3>Условия кредитования</h3>
          <CreditConditions />
          <p>* Срок кредитования — от 6 до 36 месяцев. На усмотрение банка кредиты могут быть застрахованы.
            Более полные условия кредитования обсуждаются с представителем банка, во время заполнения кредитной анкеты с представителем банка в одном из наших магазинов или в телефонном режиме.</p>
        </div>
        <div className='banks'>
          <h3>Условия оформления рассрочки от ПриватБанка</h3>
          <InstallmentTerms />
        </div>
        <div className='banks'>
          <h3>Банки - партнеры</h3>
          <PartnerBanks />
        </div>
      </div>
    </Link>
  );
};

export default React.memo(Credit);
