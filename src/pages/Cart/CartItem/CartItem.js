import React, {useEffect, useState} from 'react';
import './CartItem.scss';
// import image from 'public/images/gallery_items/canon_1/image_1.jpg'
// import {image2} from 'public/images/gallery_items/canon_1/image_2.jpg'
// import {image3} from 'public/images/gallery_items/canon_1/image_3.jpg'

const CartItem = (props) => {
  const { item } = props;
  return (
    <div className='CartItem'>
      <div className='CartItem__img-descr-wrap'>
        <div className='CartItem__img'>
          <img src={process.env.PUBLIC_URL + '/images/gallery_items/canon_1/image_2.jpg'} alt=""/>
        </div>
        <div className='CartItem__descrip'>
          <span>Canon EOS 6D</span>
          <span>wi-fi body</span>
          <span>Код товара: 123423</span>
        </div>
      </div>
      <div className='CartItem__price'>

      </div>
      <div className='CartItem__quantity'>
        <button >+</button>

        <button >– </button>
      </div>
      <div className='CartItem__total'>

      </div>
    </div>
  );
};

export default CartItem;