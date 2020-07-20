import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import './QuantityOnPage.scss';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, setPerPage} from '../../store/actions/actions';
import {useHistory, useLocation} from 'react-router';
import {changeStandartQuery} from '../../utils/utils';
import querystring from 'query-string';

const PaginationSelect = ({perPage, currentPage, productsQuantity}) => {
  const page = currentPage - 1;
  const rowsPerPage = perPage;

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const queryFiltersObj = useSelector(state => state.filters.queriesObj);

  const handleChangeRowsPerPage = (event) => {
    const perPageValue = parseInt(event.target.value, 10);
    dispatch(setPerPage(perPageValue));
    dispatch(setCurrentPage(1));
    const newQueryObj = changeStandartQuery(queryFiltersObj, 'perPage', perPageValue);
    const newQueryObj2 = changeStandartQuery(newQueryObj, 'startPage', 1);
    const newQueryStr = querystring.stringify(newQueryObj2, {arrayFormat: 'comma'});
    history.push(`${location.pathname}?${newQueryStr}`);
  };

  return (
    <TablePagination
      className='products-quantity'
      labelRowsPerPage='Показывать'
      component={'div'}
      count={productsQuantity}
      page={page}
      name='perPage'
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      rowsPerPageOptions={[3, 6, 9, 12]}
    />
  );
};

const mapStoreToProps = (store) => {
  return {
    currentCategory: store.categories.currentCategory.id,
    perPage: store.categoryPage.productsPerPage,
    currentPage: store.categoryPage.currentPage,
    productsQuantity: store.products.productsQuantity
  };
};
export default connect(mapStoreToProps)(PaginationSelect);