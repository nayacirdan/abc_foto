import React, {useEffect} from 'react';
import CategoryDescription from '../../components/CategoryDescription/CategoryDescription';
import BreadcrumbsWrapper from '../../components/Breadcrumbs/Breadcrumbs';
import FilterContainer from '../../containers/Filters/Filters';
import ProductList from '../../containers/ProductList/ProductList';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategory, getFiltersByCategory,
  setFilterQuery,
  setPerPage, setPrices,
  setSortProducts
} from '../../store/actions/actions';
import {useLocation } from 'react-router';
import querystring from 'query-string';
import {findPrices} from '../../utils/utils';
import './PageCategory.scss';
import FilterDrawer from '../FilterDrawer/FilterDrawer';

const PageCategory = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get('categories');
  const dispatch = useDispatch();

  const currentCategory = useSelector(state => state.categories.currentCategory.name);
  const productsByCategory = useSelector(state => state.products.productsByCategory);
  const productsByCategoryAll = useSelector(state => state.products.productsByCategoryAll);
  const categoryTitle = useSelector((state) => state.categories.currentCategory.title);
  const isDesktop = useSelector(state => state.categoryPage.isDesktop);

  const currentQueries = querystring.parse(location.search, {arrayFormat: 'comma'});

  function useQuery () {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  
  useEffect(() => {
    dispatch(setFilterQuery(currentQueries));
    dispatch(getCategory(categoryName));
    /*   dispatch(setSearchFilters(queryString)); */
  }, [dispatch, categoryName, currentQueries]);
  
  useEffect(() => {
    dispatch(setSortProducts(query.get('sort')));
  }, [dispatch, query]);

  useEffect(() => {
    dispatch(setSortProducts(query.get('sort')));
  }, [dispatch, query]);
  useEffect(() => {
    dispatch(getFiltersByCategory(currentCategory));
  }, [currentCategory, dispatch, productsByCategory]);

  useEffect(() => {
    if (productsByCategoryAll.productsQuantity) {
      const prices = findPrices(productsByCategoryAll.products);
      dispatch(setPrices(prices[0], prices[1]));
    }
  }, [currentCategory, dispatch, productsByCategoryAll]);

  useEffect(() => {
    dispatch(setPerPage(query.get('perPage')));
  }, [currentCategory, dispatch, productsByCategory, query]);

  return (
    <div className='category'>
      <div className='container'>
        <BreadcrumbsWrapper/>
        <div className='category-main'>
          <div className='category-left'>
            <h2 className='category-title'>{categoryTitle}</h2>

            {(isDesktop) ? <FilterDrawer/> : <FilterContainer/>}

          </div>
          <ProductList/>
        </div>
      </div>
      <CategoryDescription/>
    </div>
  );
};

export default PageCategory;
