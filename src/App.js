import React from 'react';
import Header from './components/Header/Header';
import TopSlider from "./components/TopSlider/TopSlider";
import Slider from './components/SliderOfHitProducts/Slider';
import './App.scss';
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
import ProductPage from './containers/ProductPage/ProductPage';


const App = (props) => {
  return (
    <div className="App">
      <Header />
      <TopSlider />
      <Slider sliderTitle="Популярные модели" />
      <Switch>
        <Route exact path="/product" component={ProductPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
