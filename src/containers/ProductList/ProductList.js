import React, {useEffect} from 'react';
import PaginationSelect from "../../components/QuantityOnPage/QuantityOnPage";
import SortProductSelect from "../../components/SortProductsSelect/SortProductsSelect";
import {filterProducts, getProducts, setSearchFilters} from '../../store/actions/actions';
import {connect, useDispatch, useSelector} from "react-redux";
import CardItem from "../../components/Card/Card";
import PaginationWrapper from "../../components/Pagination/Pagination";
import './ProductList.scss'
import {useLocation, useHistory} from 'react-router'


const ProductList = ({currentCategory, currentPage, perPage, filterParams, sortBy}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history=useHistory();
    /*const category=useSelector(state=>state.categories.currentCategory.id);*/
/*    const perPage = useSelector(state => state.categoryPage.productsPerPage);*/
    /*    const currentFiltersString=useSelector(state=>state.filters.currentFilters);*/

    /* useEffect(() => {
         dispatch(getProducts());
     }, [getProducts]);*/

    const searchParams = new URLSearchParams(location.search);
   const formFilterString = () => {
        debugger;
       if (currentCategory.name) {
           searchParams.delete('categories');
           searchParams.set('categories', currentCategory.name);
       }
        if (!searchParams.has('perPage')) {
            searchParams.set('perPage', perPage)
        }
        if (!searchParams.has('startPage')) {
            searchParams.set('startPage', currentPage)
        }
        if (searchParams.has('startPage') && searchParams.get('startPage')!==currentPage) {
            searchParams.delete('startPage');
            searchParams.set('startPage', currentPage);
        }

        if (sortBy !=='') {
            searchParams.delete('sort');
            searchParams.set('sort', sortBy);
        }
       /* if (!searchParams.has('categories')) {
            searchParams.set('categories', currentCategory.name)
        }*/ /*else if(searchParams.get('categories') !== currentCategory.name) {
            searchParams.delete('categories');
            searchParams.set('categories', currentCategory.name);
        }*/
        const filterString=searchParams.toString();
        console.log('filterString', filterString);

       history.push(`/products/filter?${searchParams}`);
        return filterString;
    }

/*    useEffect(() => {
        dispatch(setSearchFilters(formFilterString()))
    }, [setSearchFilters]);*/

    useEffect(() => {
        dispatch(setSearchFilters(formFilterString()))
        console.log('filterParams in seEffect',filterParams);
        dispatch(filterProducts(formFilterString()));
    }, [currentCategory, sortBy, currentPage, perPage]);

    const products = useSelector(state => state.products.products);
    console.log('products', products);
    let productsList = (<div className='empty-product-list'>No items are available</div>)
    if (products && products.length) {
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

const mapStoreToProps=(state)=>{
    return {
        perPage: state.categoryPage.productsPerPage,
        currentPage: state.categoryPage.currentPage,
        sortBy: state.categoryPage.sortBy,
        currentCategory: state.categories.currentCategory,
        filterParams: state.filters.searchFilters
    }


}

export default connect(mapStoreToProps)(ProductList);
