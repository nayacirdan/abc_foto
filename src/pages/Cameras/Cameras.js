import React from 'react';
import CategoryDescription from "../../components/CategoryDescription/CategoryDescription";
import BreadcrumbsWrapper from "../../components/Breadcrumbs/Breadcrumbs";
import SortProductSelect from "../../components/SortProductsSelect/SortProductsSelect";
import PaginationSelect from "../../components/QuantityOnPage/QuantityOnPage";
import FilterContainer from "../../containers/Filters/Filters";
import ProductList from "../../containers/ProductList/ProductList";
import './Cameras.scss'


const Cameras = () => {

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
    );
};

export default Cameras;
