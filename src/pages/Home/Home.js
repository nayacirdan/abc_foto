import React from 'react';
import TopSlider from "../../components/TopSlider/TopSlider";
import Slider from '../../containers/SliderOfHitProducts/Slider';


const Home = (props) => {
  return (
    <div>
      <TopSlider />
      <Slider sliderTitle="Популярные модели" />
    </div>
  );
};

export default Home;
