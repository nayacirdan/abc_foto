import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import '../CartSection/CartSection.scss';

const CartItems = ({cartInfo, withButtons}) => {
  const [amount, setAmount] = useState(0);

  const renderItems = cartInfo.map((item, index) => (
    <CartItem key={index} item={item} withButtons={withButtons}/>
  ));

  useEffect(() => {
    console.log('object');
    setAmount(() => {
      const totalAmount = cartInfo.map(item => {
        return item.currentPrice * item.quantity;
      });
      let sum = 0;
      for (var i = 0; i < totalAmount.length; i++) {
        sum = sum + parseInt(totalAmount[i]);
      }
      return sum;
    });
  }, [amount, cartInfo, setAmount]);

  return (

    <div className='CartSection__cart-item'>
      {renderItems}
      <div className='CartSection__total'>
        <span className='CartSection__total--text'>
         Итого {renderItems.length} товара на общую сумму
        </span>
        <span className='CartSection__total--price'>
          {amount} ₴.
        </span>
      </div>
    </div>

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
  
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CartItems));
