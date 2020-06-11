import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home/Home';


const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
