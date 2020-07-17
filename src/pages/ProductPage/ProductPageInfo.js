import React from 'react';
import ContainedButtons from '../../components/Button/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SimpleExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel';
import { DeliveryInfo } from '../../components/ExpansionPanel/DeliveryInfo';
import Gallery from '../../components/Gallery/Gallery';
import Pagination from '../../components/Gallery/SliderPagination/SliderPagination';
import Accordion from './Accordion/Accordion';

import { connect } from 'react-redux';

const ProductPageInfo = (props) => {
  const { product } = props;

  const getProductAvailability = () => {
    if (product.isAvailable) {
      return (<span className="availText">
                В наличии
      </span>);
    } else {
      if (product.isExpected) {
        return (<span className="expectText">
                    Ожидается
        </span>);
      } else {
        return (<span className="notAvailText">
                    Нет в наличии
        </span>);
      }
    }
  };

  const correctlyPrice = (product.previousPrice ? (
    <div className='priceContainer'>
      <div className='salePrice'>
        <span>{product.currentPrice}</span> грн
      </div>
      <div className='oldPrice'>
        <span>{product.previousPrice}</span> грн
      </div>
    </div>
  )
    : (
      <div className='fullPrice'>
        <span>{product.currentPrice}</span> грн
      </div>
    )
  );
  const redirectHandler = () => {
    window.location.assign('https://rozetka.com.ua/credit/');
  };

  return (
    <>
      <div className="slider-info">
        <div>
          <div>
            <Gallery product={product} />
          </div>
          <div className='simple-slider'>
            <Pagination product={product} />
          </div>
        </div>
        <div className='credit'>
          <div className='availability'>{getProductAvailability()}</div>
          <div>
            {correctlyPrice}
          </div>
          <div className='purchase'>
            <div className='purchase_block'>
              <ContainedButtons className="green-btn"
                text={<div className="btn btn-buy">
                  <p>Купить</p>
                  <ShoppingCartOutlinedIcon className='buy-icon lightColorIcon' />
                </div>} />
              <div className="delivery">
                <h4>ДОСТАВКА</h4>
                <div>
                  <ul>
                    <li>Доставка по всей Украине</li>
                    <li>Оплата товара при получении</li>
                    <li>Возможен самовывоз</li>
                  </ul>
                </div>
              </div>
                            
            </div>
            <div className='purchase_block'>
              <ContainedButtons className="grey-btn"
                onClick={redirectHandler}
                text={<div className="btn">
                  <p>Купить в кредит</p>
                </div>} />

              <div className="guarantee">
                <h4>ГАРАНТИЯ</h4>
                <p>{product.guarantee}</p>
              </div>
            </div>
          </div>
          <SimpleExpansionPanel title='Условия доставки и оплаты'
            main={<DeliveryInfo />}
            className='expansion-panel'
          />
        </div>
        <div className='description-info'>
          {product.description}
        </div>
        <div className='vertical-tabs'>
          <Accordion />
        </div>

      </div>
    </>
  );
};

const mapStateToProps = store => {
  return {
    product: store.products.currentProduct
  };
};

export default connect(mapStateToProps, null)(ProductPageInfo);