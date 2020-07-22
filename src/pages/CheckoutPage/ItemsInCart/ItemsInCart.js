import React from 'react';
import SimpleModal from '../../../components/Modals/ConfirmOrderModal';

const MyComponent = ({submitForm, products}) => {
  return (
    <div>
      <div className="big-text checkout-title">Товары в корзине</div>
      <div className="checkout-container">
        {products.map((product, i) => (
          <div className="checkout-item" key={`${product.imageURL}${i}`}>
            <img className="checkout-item-image" src={product.imageURL}
              alt="checkout-item"/>
            <div className="item-description">
              <span className="item-description-title">{product.name}</span>
              <span className="item-description-code">Код товара: {product.article}</span>
            </div>
            <div className="checkout-item-price">{product.price}</div>
          </div>
        ))}
        <div className="order-sum">Сумма заказа: 41 397 грн </div>

        {/* Modal + Submit Button */}
        <SimpleModal onClick={submitForm}/>
      </div>
    </div>
  );
};

export default MyComponent;
