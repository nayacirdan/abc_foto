import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getAllCatalog} from '../../store/actions/actions';
import {Link} from 'react-router-dom';
import './CatalogLinks.scss';

const CatalogLinks = ({categories}) => {
  let navlinks = 'Sorry no catalog found in MongoDB, I am stupid machine';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCatalog());
  }, [dispatch]);

  if (categories && categories.length) {
    navlinks = categories.filter(el => el.parentId !== 'null').map((cat) => (<Link className='nav__menu-item' to={`/products/filter?categories=${cat.name}`}>{cat.title}</Link>));
  }

  return (
    <div className='navLinks-NAYA nav__menu'>
      {navlinks}
    </div>
  );
};

const mapStoreToProps = (store) => {
  return {
    categories: store.categories.allCategories
  };
};

export default connect(mapStoreToProps)(CatalogLinks);
