import React from 'react';
import './CartItem.scss';

const CartItem = (props) => {
  const { item, withButtons } = props;
  return (
    <div className='CartItem'>
      <div className='CartItem__img-descr-wrap'>
        <div className='CartItem__img'>
          <img src={item.imageUrls[0]} alt=""/>
        </div>
        <div className='CartItem__descrip'>
          <span className='CartItem-brand'>{item.brand}</span>
          <span className='CartItem-itemNo'>№:{item.itemNo}</span>
        </div>
      </div>
      <div className='CartItem__price'>
        {`${item.currentPrice} ₴`}
      </div>
      <div className='CartItem__quantity'>
        {
          withButtons &&
        (<button >+</button>)
        }
        <span>{item.quantity}</span>
        {
          withButtons &&
              (<button >-</button>)
        }
      </div>
      
      <div className='CartItem__total'>
        {`${item.currentPrice * item.quantity} ₴`}
      </div>
    </div>
  );
};

export default CartItem;