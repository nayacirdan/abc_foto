import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartSection.scss';
import CartItem from '../CartItem/CartItem';
import Button from '@material-ui/core/Button';

const CartSection = ({cartInfo}) => {
  debugger;
  const renderItems = cartInfo.map((item) => (
    <CartItem item={item}/>
  ));
    
  return (
    <>
      <div className='CartSection'>
        <div className="CartSection__wrap">
          <div className='CartSection__heading'>
                        Моя Корзина
          </div>
          <div className="CartSection__products">
            <div className='CartSection__title'>
              <span>Товар</span>
              <span>Цена</span>
              <span>Количество</span>
              <span>Всего</span>
            </div>
            <div className='CartSection__cart-item'>
              {renderItems}
            </div>
          </div>
          <div className='CartSection__checkout'>
            <div className='CartSection__btn-cont'>
              <Button variant='outlined'>Продолжить покупки</Button>
            </div>
            <div className='CartSection__total'>
              <span className='CartSection__total--text'>
                                Итого {renderItems.length} товара на общую сумму
              </span>
              <span className='CartSection__total--price'>
 грн.
              </span>
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