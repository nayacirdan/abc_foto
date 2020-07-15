import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import './Pagination.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../store/actions/actions';

const PaginationWrapper = () => {
  const pagesQuantity = useSelector((state) => state.categoryPage.pagesQuantity);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
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