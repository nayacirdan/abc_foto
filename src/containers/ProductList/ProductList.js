import React, {useEffect} from 'react';
import PaginationSelect from '../../components/QuantityOnPage/QuantityOnPage';
import SortProductSelect from '../../components/SortProductsSelect/SortProductsSelect';
import {filterProducts, setSearchFilters} from '../../store/actions/actions';
import {connect, useDispatch, useSelector} from 'react-redux';
import CardItem from '../../components/Card/Card';
import PaginationWrapper from '../../components/Pagination/Pagination';
import './ProductList.scss';
import {useLocation, useHistory} from 'react-router';

const ProductList = ({currentCategory, currentPage, perPage, filterParams, sortBy, allState}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  function useQuery () {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const searchParams = new URLSearchParams(location.search);
  /* useEffect(() => {
      const formFilterString = () => {
        /!*      if (currentCategory.name) {
          searchParams.delete('categories');
          searchParams.set('categories', currentCategory.name);
        }
        if ((!searchParams.has('perPage')) && perPage !== 3) {
          searchParams.set('perPage', perPage);
        }
        if (!searchParams.has('startPage') && currentPage !== 1) {
          searchParams.set('startPage', currentPage);
        }
        if (searchParams.has('startPage') && (searchParams.get('startPage') !== currentPage)) {
          searchParams.delete('startPage');
          searchParams.set('startPage', currentPage);
        }
  
        if (sortBy !== '') {
          searchParams.delete('sort');
          searchParams.set('sort', sortBy);
        } *!/
        const filterString = searchParams.toString();
        /!*      history.push(`?${searchParams}`); *!/
        return filterString;
      };
      debugger;
      dispatch(setSearchFilters(query.toString()));
      // New searchParams after history push
    }, [query]);
  
    const locationFilters = useSelector(state => state.filters.locationFilters);
  */
  const queryString = query.toString();
  useEffect(() => {
    dispatch(filterProducts(queryString));
  }, [dispatch, queryString]);

  const products = useSelector(state => state.products.products);
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

const mapStoreToProps = (state) => {
  return {
    perPage: state.categoryPage.productsPerPage,
    currentPage: state.categoryPage.currentPage,
    sortBy: state.categoryPage.sortBy,
    currentCategory: state.categories.currentCategory,
    filterParams: state.filters.searchFilters,
    allState: state
  };
};

export default connect(mapStoreToProps)(ProductList);
