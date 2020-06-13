import React from 'react';
import Header from './components/Header/Header';
import TopSlider from "./components/TopSlider/TopSlider";
import Slider from './containers/SliderOfHitProducts/Slider';
import './App.scss';
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import ProductList from './containers/ProductList/ProductList'
import MainPage from "./pages/Main/Main";
import Cameras from "./pages/Cameras/Cameras";

const App = (props) => {
  return (
    <div className="App">
      <Header />
        <Switch>
            <Route exact path='/'  component={MainPage}/>
            <Route exact path='/cameras'  component={Cameras}/>
        </Switch>
      <Footer />
    </div>
  );
};

export default App;
