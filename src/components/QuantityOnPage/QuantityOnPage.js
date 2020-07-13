import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import './QuantityOnPage.scss';
import {connect, useDispatch} from 'react-redux';
import {setCurrentPage, setPerPage} from '../../store/actions/actions';
import {useHistory, useLocation} from 'react-router';

const PaginationSelect = ({currentCategory, perPage, currentPage, productsQuantity}) => {
  const page = currentPage - 1;
  const rowsPerPage = perPage;

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const handleChangeRowsPerPage = (event) => {
    const perPageValue = parseInt(event.target.value, 10);
    dispatch(setPerPage(perPageValue));
    console.log('event.target.value', event.target.value);

    if (searchParams.has('perPage')) {
      searchParams.delete('perPage');
    }
    searchParams.append('perPage', event.target.value);

    console.log('searchParams in quantity', searchParams.toString());
    dispatch(setPerPage(event.target.value));
    dispatch(setCurrentPage(1));
    history.push(`/products/filter?${searchParams}`);
  };

  return (
    <TablePagination
      className='products-quantity'
      labelRowsPerPage='Показывать'
      component="div"
      count={productsQuantity}
      page={page}

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