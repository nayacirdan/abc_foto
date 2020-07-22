import React from 'react';
import './CartItem.scss';

const CartItem = (props) => {
  const { item } = props;
  return (
    <div className='CartItem'>
      <div className='CartItem__img-descr-wrap'>
        <div className='CartItem__img'>
          <img src={item.imageUrls[0]} alt=""/>
        </div>
        <div className='CartItem__descrip'>
          <span>{item.brand}</span>
          <span>{item.itemNo}</span>
        </div>
      </div>
      <div className='CartItem__price'>
        {`${item.currentPrice} грн`}
      </div>
      <div className='CartItem__quantity'>
        <button >+</button>
        <span>{item.quantity}</span>
        <button >– </button>
      </div>
      <div className='CartItem__total'>
        {`${item.currentPrice * item.quantity} грн`}
      </div>
    </div>
  );
};

export default CartItem;