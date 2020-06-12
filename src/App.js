import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import PromotionsAndOffers from "./components/Promotions/PromotionsAndOffers";
import Gallery from "./components/Promotions/PromotionsAndOffers";
import Swiper from "swiper";
import ProgressPagination from "./components/Promotions/PromotionsAndOffers";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>Fantastic Five Project Started!!!!</p>
        The main stucture of any page would be:
        <ul>
          <li>Main nav</li>
          <li>Header</li>
          <li>Products nav</li>
          <li>Main Container</li>
          <li>Footer</li>
        </ul>
      </header>
      <PromotionsAndOffers/>
      <Footer />
    </div>
  );
};

export default App;
