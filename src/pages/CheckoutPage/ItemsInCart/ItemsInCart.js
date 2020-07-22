import React from 'react';
import SimpleModal from '../../../components/Modals/ConfirmOrderModal';
import CartItems from '../../Cart/CartItems/CartItems';

const ItemsInCart = ({submitBtnFunc}) => {
  return (
    <div>
      <div className="big-text checkout-title">Товары в корзине</div>
      <div className="checkout-container">
        <CartItems/>
        {/* <div className="order-sum">Сумма заказа: 41 397 грн </div> */}
          
        {/* Modal + Submit Button */}
        <SimpleModal onClick={submitBtnFunc}/>
      </div>
    </div>
  );
};

export default ItemsInCart;
