import React, { useEffect } from "react";
import TopSlider from "../../components/TopSlider/TopSlider";
import Slider from "../../containers/SliderOfHitProducts/Slider";
import PromotionsAndOffers from "../../components/Promotions/PromotionsAndOffers";

import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/actions';
import { Link } from 'react-scroll';
import Card from '../../components/Card/Card';


const Home = (props) => {
  const { products, getProducts } = props;
  useEffect(() => {
    getProducts()
  }, [getProducts]);


  const filtedProducts = (products || []).filter((key) => (key.isAvailable === true || key.isExpected === true));
  const sliderProducts = filtedProducts.map(product => (
    <div key={product.itemNo} className="slider-card">
      <Link
        activeClass='active'
        spy={true}
        smooth={true}
        to='productPage'
        duration={500}
      >
        <Card key={product.itemNo} product={product} />
      </Link>
    </div>)
  );
  
  return (
    <div>
      <TopSlider />
      <Slider sliderTitle="Популярные модели" prods={sliderProducts} />
      <PromotionsAndOffers />

    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    products: store.products.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
