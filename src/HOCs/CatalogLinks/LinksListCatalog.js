import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getAllCatalog} from '../../store/actions/actions';
import {Link} from 'react-router-dom';
import './CatalogLinks.scss';

const LinksListCatalog = ({categories, perPage, sort}) => {
  let navlinks = 'Sorry no catalog found in MongoDB, I am stupid machine';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCatalog());
  }, [dispatch]);

  if (categories && categories.length) {
    navlinks = categories.filter(el => el.parentId !== 'null').map((cat, id) => (<Link key ={id} className='nav__menu-item' to={`/products/filter?categories=${cat.name}&sort=${sort}&perPage=${perPage}`}>{cat.title}</Link>));
  }

  return (
    <div className='navLinks-NAYA nav__menu'>
      {navlinks}
    </div>
  );
};

const mapStoreToProps = (store) => {
  return {
    categories: store.categories.allCategories,
    perPage: store.categoryPage.productsPerPage,
    sort: store.categoryPage.sortBy
  };
};

export default connect(mapStoreToProps)(LinksListCatalog);
