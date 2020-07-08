import React from 'react';
import Header from './containers/Header/Header';
import './App.scss';
import Footer from './components/Footer/Footer';
import {connect} from 'react-redux';
import ValidationForm from './components/Modals/ValidationForm';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Cameras from './pages/Cameras/Cameras';
import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home/Home';

import CategoryRoutes from './HOCs/CategoryRoutes/CategoryRoutes';
import Cart from './pages/Cart/Cart';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SubMenu from './containers/Header/Navigation/SubMenu';

const App = (props) => {
  const {modalIsOpen} = props;

  const values = {
    name: 'Pasha',
    email: 'despablos@pablos-it.com',
    phone: '+380931183945',
    password: '123qweasd',
    confirmPassword: '123qweasd'
  };
  const errors = 'noerr';
  const touched = false;
  const handleSubmit = () => {
  };
  const isValid = false;
  const setFieldTouched = null;

  return (
    <div className="App">
      <Router>
        <Header/>
        <SubMenu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/filter/:itemNo" component={ProductPage} />
          <Route exact path='/cameras' component={Cameras} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path='/products/filter' component={CategoryRoutes} />
        </Switch>
        <Footer/>
      </Router>
      {modalIsOpen && <ValidationForm values={values}
        errors={errors}
        touched={touched}
        handleSubmit={handleSubmit}
        isValid={isValid}
        setFieldTouched={setFieldTouched}
      />}
    </div>
  );
};
const mapStoreToProps = (store) => {
  return {modalIsOpen: store.modals.modalIsOpen};
};

export default connect(mapStoreToProps)(App);