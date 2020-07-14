import React, {useEffect} from 'react';
import CategoryDescription from '../../components/CategoryDescription/CategoryDescription';
import BreadcrumbsWrapper from '../../components/Breadcrumbs/Breadcrumbs';
import FilterContainer from '../../containers/Filters/Filters';
import ProductList from '../../containers/ProductList/ProductList';
import {useDispatch} from 'react-redux';
import {
  getCategory,
  setCurrentPage,
  setFilterQuery,
  setPerPage,
  setSearchFilters,
  setSortProducts
} from '../../store/actions/actions';
import {useLocation } from 'react-router';
import querystring from 'query-string';

/* Пока все грузится делаем прелоадер.
За это время загружаем:
    Запросом идем по нити parentID и фигачим breadcrumbs
    Запросом загружаем товары нужной нам категории.
    Выделяем какие у нас есть фильтры
* */
const PageCategory = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get('categories');
  const dispatch = useDispatch();

  const currentQueries = querystring.parse(location.search, {arrayFormat: 'comma'});
  console.log('------------------currentQueries', currentQueries);
  console.log('------------------currentQueriesSSSSSSS', querystring.stringify(currentQueries, {arrayFormat: 'comma'}));
  debugger;

  function useQuery () {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const queryString = query.toString();
  
  useEffect(() => {
    dispatch(setFilterQuery(currentQueries));
    dispatch(getCategory(categoryName));
    dispatch(setSearchFilters(queryString));
  }, [queryString, dispatch, categoryName, currentQueries]);

  return (
    <div className='category'>
      <div className='container'>
        <BreadcrumbsWrapper/>
        {/*            <h1>{match.params.categoryName}</h1> */}
        <div className='category-main'>
          <FilterContainer filters={null}/>
          <ProductList/>
        </div>
      </div>
      <CategoryDescription/>
    </div>
  );
};

export default PageCategory;
