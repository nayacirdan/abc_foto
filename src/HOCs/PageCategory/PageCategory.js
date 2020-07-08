import React, {useEffect} from 'react';
import CategoryDescription from '../../components/CategoryDescription/CategoryDescription';
import BreadcrumbsWrapper from '../../components/Breadcrumbs/Breadcrumbs';
import FilterContainer from '../../containers/Filters/Filters';
import ProductList from '../../containers/ProductList/ProductList';
import {useDispatch} from 'react-redux';
import {getCategory, setCurrentPage, setPerPage, setSortProducts} from '../../store/actions/actions';
import {useLocation } from 'react-router';

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

  useEffect(() => {
    dispatch(getCategory(categoryName));
  }, [categoryName, dispatch]);

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
