import React from 'react';
import Header from './components/Header/Header';
import TopSlider from "./components/TopSlider/TopSlider";
import Slider from './containers/SliderOfHitProducts/Slider';
import './App.scss';
import Footer from "./components/Footer/Footer";
import {Switch, Route, Link, NavLink} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Cameras from "./pages/Cameras/Cameras";
import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home/Home';

import CategoryRoutes from "./HOCs/CategoryRoutes/CategoryRoutes";

import Cart from "./pages/Cart/Cart";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
         <Route exact path="/products/filter/:itemNo" component={ProductPage} />
          <Route exact path='/cameras' component={Cameras} />
          <Route exact path='/cart'  component={Cart}/>
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route  path='/products/filter' component={CategoryRoutes}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
