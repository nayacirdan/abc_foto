import React, {useEffect} from 'react';
import PaginationSelect from '../../components/QuantityOnPage/QuantityOnPage';
import SortProductSelect from '../../components/SortProductsSelect/SortProductsSelect';
import {filterProducts} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from '../../components/Card/Card';
import PaginationWrapper from '../../components/Pagination/Pagination';
import './ProductList.scss';
import querystring from 'query-string';

const ProductList = () => {
  const dispatch = useDispatch();
  /*  const locationFilters = useSelector(state => state.filters.locationFilters); */
  
  const queryFilters = useSelector(state => state.filters.queriesObj);
  debugger;
  const queryFiltersString = querystring.stringify(queryFilters, {arrayFormat: 'comma'});

  useEffect(() => {
    debugger;
    if (queryFiltersString.length) {
      dispatch(filterProducts(queryFiltersString));
    }

  /*  dispatch(filterProducts(locationFilters)); */
  }, [dispatch, queryFiltersString]);

  const products = useSelector(state => state.products.productsByCategory);
  let productsList = (<div className='empty-product-list'>No items are available</div>);
  if (products && products.length) {
    productsList = products.map((product) => {
      return (<CardItem product={product}/>);
    });
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
