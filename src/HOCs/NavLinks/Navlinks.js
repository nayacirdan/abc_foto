import {Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import React from "react";
import BreadcrumbsWrapper from "../../components/Breadcrumbs/Breadcrumbs";
import FilterContainer from "../../containers/Filters/Filters";
import ProductList from "../../containers/ProductList/ProductList";
import CategoryDescription from "../../components/CategoryDescription/CategoryDescription";

const Navlinks_MONGO=[
    {
        title:'Цифровая техника',
        componentpath: '../../pages/',
        componentname: '',
        url: '/digitalTech'
    }
]
const Catalog_MONGO=[
    {
        name:'Цифровая техника',
        id:'1',
        parentId: '',
        date:  Date.now
    },
    {
        name:'Оптика для фото',
        id:'',
        parentId: '',
        date:  Date.now
    },
    {
        name:'Аксессуары',
        id:'',
        parentId: '',
        date:  Date.now
    },
    {
        name:'Чехлы',
        id:'',
        parentId: '',
        date:  Date.now
    },
    {
        name:'Студийное оборудование',
        id:'',
        parentId: '',
        date:  Date.now
    },
    {
        name:'Штативы',
        id:'',
        parentId: '',
        date:  Date.now
    },
    {
        name:'Фотоальбомы',
        id:'',
        parentId: '',
        date:  Date.now
    },
    {
        name:'Фоторамки',
        id:'',
        parentId: '',
        date:  Date.now
    },
]


const Routes=Navlinks_MONGO.map((link)=>  <Route exact path={link.url} component={Home} />);

const Routes1=[
    <Route exact path='/digitalTech' component={Home} />,
    <Route exact path='/optics' component={Home} />,
    <Route exact path='/accessorise' component={Home} />,
    <Route exact path='/cases' component={Home} />,
    <Route exact path='/studio-equipment' component={Home} />,
    <Route exact path='/tripods' component={Home} />,
    <Route exact path='/photo-albums' component={Home} />,
    <Route exact path='/photo frames' component={Home} />
]

const Page=(props)=>{

    return (
        <div className='category'>
            <div className='container'>
                <BreadcrumbsWrapper/>

                <div className='category-header'>
                </div>

                <div className='category-main'>
                    <FilterContainer/>
                    <ProductList/>

                </div>
            </div>

            <CategoryDescription/>
        </div>
    )
}