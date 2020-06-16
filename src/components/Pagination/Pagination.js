import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import './Pagination.scss'

const PaginationWrapper = () => {
    const category='cameras';

    return (
        <MemoryRouter initialEntries={[`/${category}`]} initialIndex={0}>
            <Route>
                {({ location }) => {
                    const query = new URLSearchParams(location.search);
                    console.log(query);

                    const page = parseInt(query.get('page') || '1', 8);
                    console.log(page);
                    return (
                        <Pagination
                            className='products-pagination'
                            page={page}
                            count={8}
                            siblingCount={3}
                            renderItem={(item) => (
                                <PaginationItem
                                    component={Link}
                                    to={`/${category}${item.page === 1 ? '' : `?page=${item.page}`}`}
                                    {...item}
                                />
                            )}
                        />
                    );
                }}
            </Route>
        </MemoryRouter>
    );
}

export default PaginationWrapper;