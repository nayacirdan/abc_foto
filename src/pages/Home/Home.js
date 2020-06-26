import React from "react";
import TopSlider from "../../components/TopSlider/TopSlider";
import Slider from "../../containers/SliderOfHitProducts/Slider";
import PromotionsAndOffers from "../../components/Promotions/PromotionsAndOffers";
import {SignAndRegForm} from "../../components/Modals/SignAndRegForm";

const Home = (props) => {

  return (
    <div>
      <TopSlider />
      <Slider sliderTitle="Популярные модели" />
      <PromotionsAndOffers />

    </div>
  );
};

export default Home;
