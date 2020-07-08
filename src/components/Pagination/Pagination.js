import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import './Pagination.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../store/actions/actions';

const PaginationWrapper = () => {
  const category = useSelector((state) => state.categories.currentCategory.name);
  console.log('category from pagination', category);
  const pagesQuantity = useSelector((state) => state.categoryPage.pagesQuantity);
  const perPage = useSelector((state) => state.categoryPage.productsPerPage);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    console.log('pagination change', value);
    dispatch(setCurrentPage(value));
  };
  return (

    <Route>
      {({ location }) => {
        const query = new URLSearchParams(location.search);

        const page = parseInt(query.get('startPage') || '1', 10);

        return (
          <Pagination
            className='products-pagination'
            page={page}
            count={pagesQuantity}
            siblingCount={3}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`filter?categories=${category}&perPage=${perPage}&${item.page === 1 ? '' : `startPage=${item.page}`}`}
                {...item}
              />
            )}
          />
        );
      }}
    </Route>

  );
};

export default PaginationWrapper;