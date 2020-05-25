import React from 'react';
import Header from './components/Header/Header';
import TopSlider from "./components/TopSlider/TopSlider";
import Slider from './containers/SliderOfHitProducts/Slider';
import './App.scss';
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <TopSlider />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
