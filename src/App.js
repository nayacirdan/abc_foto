import React from 'react';
import Header from './components/Header/Header';
import TopSlider from "./components/TopSlider/TopSlider";
import Slider from './containers/SliderOfHitProducts/Slider';
import './App.scss';
import Footer from "./components/Footer/Footer";
import CardItem from "./components/Card/Card";
import MainPage from "./pages/Main/Main";
import {Switch, Route} from 'react-router-dom'
import Cameras from "./pages/Cameras/Cameras";
import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home/Home';
import PromotionsAndOffers from "./components/Promotions/PromotionsAndOffers";


const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductPage} />
          <Route exact path='/cameras'  component={Cameras}/>
      </Switch>
      <PromotionsAndOffers/>
      <Footer />
    </div>
  );
};

export default App;
