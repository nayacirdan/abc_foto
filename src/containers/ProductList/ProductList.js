import React, {useEffect} from 'react';
import PaginationSelect from '../../components/QuantityOnPage/QuantityOnPage';
import SortProductSelect from '../../components/SortProductsSelect/SortProductsSelect';
import {filterProducts, toggleFilterDrawer} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from '../../components/Card/Card';
import PaginationWrapper from '../../components/Pagination/Pagination';
import './ProductList.scss';
import querystring from 'query-string';
import {Button} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const ProductList = () => {
  const dispatch = useDispatch();
  /*  const locationFilters = useSelector(state => state.filters.locationFilters); */
  
  const queryFilters = useSelector(state => state.filters.queriesObj);
  const queryFiltersString = querystring.stringify(queryFilters, {arrayFormat: 'comma'});

  useEffect(() => {
    if (queryFiltersString.length) {
      dispatch(filterProducts(queryFiltersString));
    }

  /*  dispatch(filterProducts(locationFilters)); */
  }, [dispatch, queryFiltersString]);

  const products = useSelector(state => state.products.productsByCategory);
  let productsList = (<div className='empty-product-list'>No items are available</div>);
  if (products && products.length) {
    productsList = products.map((product) => {
      return (<CardItem product={product} key={product.article}/>);
    });
  }

  return (
    <div className='products-list-container'>
      <Button
        className='filters-btn btn'
        variant="contained" color="primary"
        startIcon={<FilterListIcon color={'secondary'}
        />}
        onClick={() => dispatch(toggleFilterDrawer(true))}
      >
            Фильтры
      </Button>
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
