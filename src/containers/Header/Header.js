import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, Grid, TextField } from '@material-ui/core';
import { withRouter } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuListComposition from '../../components/Menu/MenuListComposition';
import accountIcon from '../../svg/accountIcon';
import cartIcon from '../../svg/cartIcon';
import logo from '../../svg/logo';

import './Header.scss';
import Navigation from './Navigation/Navigation';

import { loggedIn, getCustomer } from '../../store/actions/users/index';
import { searchChange, getProductsBySearch, getProducts, setCurrentProduct, openModal, setModalType } from '../../store/actions/actions';
import { connect } from 'react-redux';
import NavPanel from './NavPanel/NavPanel';

import Link from '@material-ui/core/Link';

import SearchBar from './Autocomplete/Autocomplete';
import setToLocalStorage from '../../utils/localStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    margin: '0 auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    position: 'relative'
  },
  expandMore: {
    color: '#000'
  }
}));

const Header = (props) => {
  const {
    searchChange,
    getProductsBySearch,
    history,
    setCurrentProduct,
    getProducts,
    products,
    openModal,
    userInfo,
    logged,
    loggedIn,
    getCustomer,
    customerInfo
  } = props;

  const classes = useStyles();

  useEffect(() => {
    searchChange();
  }, [searchChange]);

  useEffect(() => {
    if (userInfo) {
      loggedIn();
      getCustomer();
    }
  }, [getCustomer, loggedIn, userInfo]);

  const onChangeHandler = (e) => {
    searchChange(e.target.value);
    getProductsBySearch({ query: e.target.value.trim() });
  };

  const filterProductsHandler = (e, value) => {
    if (value !== null) {
      setToLocalStorage(value);
      setCurrentProduct(value);
      history.push(`/products/filter/${value.itemNo}`);
    }
  };

  const phoneNumber = (
    <MenuListComposition
      firstItem={
        <div className="menu-item">
          <div><a href="tel:0800212150" className="menu-item__tel-number"><span>0 (800) 21 21 50</span></a></div>
          <ExpandMoreIcon className={classes.expandMore} fontSize="small" />
        </div>
      }
      secondItem={
        <div className="menu-item">
          <div><a href="tel:+380443777011" className="menu-item__tel-number">0 (44) 377 70 11</a> &nbsp;</div>
          <div>Киев</div>
        </div>
      }
      thirdItem={
        <div className="menu-item">
          <div><a href="tel:0563703653" className="menu-item__tel-number">0 (56) 370 36 53</a> &nbsp;</div>
          <div>Днепр</div>
        </div>
      }
    >
    </MenuListComposition>
  );

  const AccountMenu = (
    <div className="account-menu" onClick={openModal}>
      <div className="account-menu__accountIcon">{accountIcon}</div>
      <div className="account-menu__iconText">Вход</div>
    </div>
  );

  const UserMenu = (
    <div className="account-menu">
      <div className="account-menu__accountIcon">{accountIcon}</div>
      <div className="account-menu__iconText">Welcome, {customerInfo.login}</div>
    </div>
  );

  return (
    <div className="classes.root">
      <div className='Header__top'>
        <div className='container'>
          <Grid container md={12} justify='flex-start' className='header-links-container'>
            <div className='Header__text'>Магазины</div>
            <div className='Header__text'>Кредит</div>
            <div className='Header__text'>Доставка и оплата</div>
            <div className='Header__text'>Гарантии</div>
            <div className='Header__text'>О компании</div>
            <div className='Header__text'>Контакты</div>
          </Grid>
        </div>

      </div>
      <div className="container header" >
        <div className='navPanel'>
          <NavPanel />
        </div>

        <NavLink exact to="/" className="logo-block">
          <div className="logo">{logo}</div>
        </NavLink>

        <div className="search-form">
          <SearchBar
            className={classes.autocomplete}
            id="combo-box-demo"
            options={products}
            getOptionLabel={(option) => option.name}
            onChangeAutocomplete={filterProductsHandler}

            style={{ width: '99%' }}
            renderInput={(params) => <TextField
              {...params}
              onChangeTextField={onChangeHandler}
              onFocus={getProducts}
            />}
          />
        </div>

        <div className="menu-item">
          {phoneNumber}
        </div>

        <div>{logged ? UserMenu : AccountMenu}</div>

        <NavLink exact to="/cart" className="cart-nav">
          <div className="account-menu">
            <div className="account-menu__accountIcon">{cartIcon}</div>
            <div className="account-menu__iconText">Корзина</div>
          </div>
        </NavLink>
      </div>
      <div className='Header__bottom'>
        <Grid container>
          <Grid item md={12}>
            <Navigation />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products, userSignin, getCustomer }) => {
  return {
    products: products.products,
    userInfo: userSignin.userInfo,
    logged: userSignin.logged,
    customerInfo: getCustomer.customerInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    searchChange: (text) => dispatch(searchChange(text)),
    getProductsBySearch: (text) => dispatch(getProductsBySearch(text)),
    setCurrentProduct: (product) => dispatch(setCurrentProduct(product)),
    openModal: () => dispatch(openModal()),
    loggedIn: () => dispatch(loggedIn()),
    getCustomer: () => dispatch(getCustomer())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));