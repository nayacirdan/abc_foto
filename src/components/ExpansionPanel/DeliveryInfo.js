import React from 'react';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import './ExpansionPanel.scss';

export const DeliveryInfo = () => {
  return (
    <div className='delivery'>
      <div className="delivery_item">
        <span className='delivery_item-icon'><StorefrontIcon /></span>
        <span className='delivery_item-text'>Cамовывоз с магазина</span>
        <span component='span' className="delivery_item-free">Бесплатно</span>
      </div>
      <div className="delivery_item">
        <span className='delivery_item-icon'><DirectionsWalkIcon /></span>
        <span className='delivery_item-text'>Самовывоз из Новой Почты</span>
        <span className="delivery_item-free">Бесплатно</span>
      </div>
      <div className="delivery_item">
        <span className='delivery_item-icon'><CardGiftcardIcon /></span>
        <span className='delivery_item-text'>Курьер по вашему адресу</span>
        <span className='delivery_item-price'>59 ₴</span>
      </div>
    </div>
  );
};
