import React from 'react';
import './CartItem.scss';
import {connect} from 'react-redux';
import {deleteItem} from '../../../store/actions/cart/index';

const CartItem = (props) => {
  const { item, deleteItem, withButtons } = props;

  const deleteItemHandler = () => {
    deleteItem(item);
  };
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
      <button className={'btn-delete'} onClick={deleteItemHandler}>X</button>
    </div>
  );
};
// const mapStateToProps = ({cartReducer}) => {
//   return {

//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (product) => dispatch(deleteItem(product))
  };
};

export default React.memo(connect(null, mapDispatchToProps)(CartItem));
