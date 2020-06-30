import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Cameras from "./pages/Cameras/Cameras";
import ProductPage from "./pages/ProductPage/ProductPage";
import Home from "./pages/Home/Home";
import {connect} from "react-redux";
import {SignAndRegForm} from "./components/Modals/SignAndRegForm";
import {Switch, Route, Link, NavLink} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CategoryRoutes from "./HOCs/CategoryRoutes/CategoryRoutes";
import Cart from "./pages/Cart/Cart";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";


const App = (props) => {
    const {modalIsOpen}=props;


    const values= {
        name:'Pasha',
        email:'despablos@pablos-it.com',
        phone:'+380931183945',
        password:'123qweasd',
        confirmPassword:'123qweasd'
    }
    const errors='noerr',
        touched=false,
        handleSubmit=()=>{},
        isValid=false,
        setFieldTouched=null

  return (
    <div className="App">
      <Header />
      {/*<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/cameras" component={Cameras} />
      </Switch>
      <Footer />*/}

        {modalIsOpen && <SignAndRegForm values={values}
                                       errors={errors}
                                       touched={touched}
                                       handleSubmit={handleSubmit}
                                       isValid={isValid}
                                       setFieldTouched={setFieldTouched}
        />}
    </div>
    
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
const mapStoreToProps=(store)=>{
    return {modalIsOpen: store.modals.modalIsOpen}
}

export default connect(mapStoreToProps)(App);
