import React, {useEffect} from 'react';
import TopSlider from "../../components/TopSlider/TopSlider";
import Slider from '../../containers/SliderOfHitProducts/Slider';
import PromotionsAndOffers from "../../components/Promotions/PromotionsAndOffers";

// import { getProductsBySearch } from '../../store/actions/actions';
// import { connect } from 'react-redux';


const Home = (props) => {
  // const { getProductsBySearch } = props;

  // useEffect(() => {
  //   getProductsBySearch({ "query": ''})
  // }, [getProductsBySearch])

  return (
    <div>
      <TopSlider />
      <Slider sliderTitle="Популярные модели" />
      <PromotionsAndOffers/>
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getProductsBySearch: (text) => dispatch(getProductsBySearch(text))
//   }
// }

// export default connect(null, mapDispatchToProps)(Home);
export default Home;
