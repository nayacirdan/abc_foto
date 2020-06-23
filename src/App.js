import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cameras from "./pages/Cameras/Cameras";
import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home/Home';
import Cart from "./pages/Cart/Cart";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:itemNo" component={ProductPage} />
          <Route exact path='/cameras' component={Cameras} />
          <Route exact path='/cart'  component={Cart}/>
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
