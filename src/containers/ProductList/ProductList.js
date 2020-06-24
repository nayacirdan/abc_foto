import React, {useEffect} from 'react';
import PaginationSelect from "../../components/QuantityOnPage/QuantityOnPage";
import SortProductSelect from "../../components/SortProductsSelect/SortProductsSelect";
import createPalette from "@material-ui/core/styles/createPalette";
import {filterProducts, getProducts} from '../../store/actions/actions';
import {useDispatch, useSelector} from "react-redux";
import CardItem from "../../components/Card/Card";
import PaginationWrapper from "../../components/Pagination/Pagination";
import './ProductList.scss'

const ProductList = ({category}) => {
    const dispatch = useDispatch();
    /*const category=useSelector(state=>state.categories.currentCategory.id);*/
    const perPage=useSelector(state=>state.categoryPage.productsPerPage);
/*    const currentFiltersString=useSelector(state=>state.filters.currentFilters);*/

   /* useEffect(() => {
        dispatch(getProducts());
    }, [getProducts]);*/

    useEffect(() => {
        dispatch(filterProducts(`categories=${category}&perPage=${perPage}`));
    }, [filterProducts]);

    const products = useSelector(state => state.products.products);
    console.log('products', products);
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
