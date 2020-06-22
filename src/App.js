import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Footer from "./components/Footer/Footer";
import {Switch, Route} from 'react-router-dom'
import Cameras from "./pages/Cameras/Cameras";
import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home/Home';
import PromotionsAndOffers from "./components/Promotions/PromotionsAndOffers";
import CategoryRoutes from "./HOCs/CategoryRoutes/CategoryRoutes";

/*Мы заходим в приложуху, у нас загружается сразу домашняя страница
Вместе с ней грузится слайдер. Идет асинхронный запрос и получает список товаров

Вообще в идеале всю инфу не мешало бы загружать заранее, но хрен с ним.
Идет запрос на сервер и в бд, в руты загрыжаются все пасы и компоненты, в зависимости от списка категорий.
Мы переходим на страницу товаров определенной категории. Рут загружает нужный нам мейн по свитчу, рендерит правильную страницу.
* */
const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={ProductPage}/>
                <Route exact path='/cameras' component={Cameras}/>
                {/*Custom ID*/}
                <Route path='/catalog' component={CategoryRoutes}/>
                {/*<Route exact path={`/catalog/${category.id}`} render={(props)=>(<PageCategory {...props} category={category}/>)}/>*/}
            </Switch>
            <PromotionsAndOffers/>
            <Footer/>
        </div>
    );
};

export default App;
