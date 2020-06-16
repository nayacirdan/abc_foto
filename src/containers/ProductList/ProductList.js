import React, {useEffect} from 'react';
import PaginationSelect from "../../components/QuantityOnPage/QuantityOnPage";
import SortProductSelect from "../../components/SortProductsSelect/SortProductsSelect";
import createPalette from "@material-ui/core/styles/createPalette";
import {getProducts} from '../../store/actions/actions';
import {useDispatch, useSelector} from "react-redux";
import CardItem from "../../components/Card/Card";
import PaginationWrapper from "../../components/Pagination/Pagination";
import './ProductList.scss'

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [getProducts]);

    const products = useSelector(state => state.products);
    console.log(products);

    let productsList = 'No items are available'
    if (products) {
        productsList = products.map((product) => {
            return (<CardItem product={product}/>)

        })
    }

    return (
        <div className='products-list-container'>
            <div className='product-list-actions'>
                <PaginationSelect/>
                <SortProductSelect/>
            </div>
            <div className='products-list'>
                {productsList}
            </div>
            <div className='products-pagination'>
                <PaginationWrapper/>
            </div>
        </div>
    );
};

export default ProductList;
