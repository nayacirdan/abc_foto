import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import './Pagination.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../store/actions/actions';
import querystring from 'query-string';

const PaginationWrapper = () => {
  const category = useSelector((state) => state.categories.currentCategory.name);

  const pagesQuantity = useSelector((state) => state.categoryPage.pagesQuantity);
  const perPage = useSelector((state) => state.categoryPage.productsPerPage);
  const dispatch = useDispatch();
  const queryFiltersObj = useSelector(state => state.filters.queriesObj);
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
                to={(location) => {
                  const query = new URLSearchParams(location.search);
                  query.set('startPage', String(item.page));
                  const queryString = query.toString();
                  return {...location, search: queryString};
                }}
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