import React from 'react';
import Header from './components/Header/Header';
import Slider from './containers/SliderOfHitProducts/Slider';
import './App.scss';
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
