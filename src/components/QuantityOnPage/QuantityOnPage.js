import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import './QuantityOnPage.scss';
import {connect, useDispatch, useSelector} from 'react-redux';
import {filterProducts, setCurrentPage, setPerPage, setSortProducts} from '../../store/actions/actions';
import {useHistory, useLocation} from 'react-router';
import {Link} from 'react-router-dom';

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

    /*  if (searchParams.has('perPage')) {
            searchParams.delete('perPage');
          }
          searchParams.append('perPage', event.target.value);
          
          dispatch(setPerPage(event.target.value));
          dispatch(setCurrentPage(1));
          history.push(`/products/filter?${searchParams}`); */

    dispatch(setPerPage(event.target.value));
  };

  return (
    <TablePagination
      className='products-quantity'
      labelRowsPerPage='Показывать'
      component={'div'
        /* <Link to={`/products/filter?categories=dslr_cameras&perPage=${perPage}`}
          /!*  onClick={() => handleChange('-currentPrice')} *!/>
        </Link> */}
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