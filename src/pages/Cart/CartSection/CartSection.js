import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartSection.scss';

import Button from '@material-ui/core/Button';
import CartItems from '../CartItems/CartItems';
const CartSection = ({cartInfo}) => {
  return (
    <>
      <div className='CartSection'>
        <div className="CartSection__wrap">
          <div className='CartSection__heading'>
                        Моя Корзина
          </div>
          {cartInfo.length > 0 ? <div className="CartSection__products">
            <div className='CartSection__title'>
              <span>Товар</span>
              <span>Цена</span>
              <span>Кол.</span>
              <span>Всего</span>
            </div>
            <CartItems/>
          </div> : <div className='noproducts'>В корзине нет товаров</div>}
          <div className='CartSection__checkout'>
            <div className='CartSection__btn-cont'>
              <Button variant='outlined'>Продолжить</Button>
            </div>

            <div className='CartSection__btn-checkout'>
              <Link to='/checkout'>
                <Button variant='outlined'>Оформить</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({cartReducer}) => {
  return {
    cartInfo: cartReducer.cartInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CartSection));