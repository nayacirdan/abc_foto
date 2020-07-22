import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, Grid, TextField } from '@material-ui/core';
import { withRouter } from 'react-router';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuListComposition from '../../components/Menu/MenuListComposition';
import cartIcon from '../../svg/cartIcon';
import logo from '../../svg/logo';
import Author from '../../containers/Header/Author/author';

import './Header.scss';
import Navigation from './Navigation/Navigation';

import { searchChange, getProductsBySearch, getProducts, setCurrentProduct, openModal } from '../../store/actions/actions';
import { getCustomer, signIn, logOut } from '../../store/actions/users/index';
import { syncCart, getCart} from '../../store/actions/cart/index';
import { connect } from 'react-redux';
import NavPanel from './NavPanel/NavPanel';

import SearchBar from './Autocomplete/Autocomplete';
import setToLocalStorage from '../../utils/localStorage';

import { NavHashLink as Link } from 'react-router-hash-link';

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
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'lighter',
    fontSize: '12px',
    lineHeight: '14px',
    paddingRight: '2%'
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
    logged,
    getCustomer,
    customerInfo,
    registered,
    signIn,
    syncCart,
    getCart,
    cartInfo,
    logOut
  } = props;

  const classes = useStyles();

  useEffect(() => {
    searchChange();
  }, [searchChange]);

  useEffect(() => {
    getCustomer();
    if (!logged) {
      syncCart();
    }
    getCart();
  }, [getCart, getCustomer, logged, syncCart]);

  useEffect(() => {
    if (registered) {
      const {email, password} = JSON.parse(localStorage.getItem('registerAuth'));
      localStorage.removeItem('registerAuth');
      signIn(email, password);
      history.push('/');
    }
  }, [history, registered, signIn]);

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

  return (
    <div className="classes.root">
      <div className='Header__top'>
        <div className='container'>
          <Grid container justify='flex-start' className='header-links-container'>
            <Link
              className={classes.link}
              to="/info#credit"
              activeClassName="selected"
              smooth={true}
            >
              Кредит
            </Link>
            <Link
              className={classes.link}
              to="/info#shippingAndDelivery"
              activeClassName="selected"
              smooth={true}
              style={{width: '12%'}}
            >
              Доставка и оплата
            </Link>
            <Link
              className={classes.link}
              to="/info#guarantee"
              activeClassName="selected"
              smooth={true}
            >
              Гарантии
            </Link>
            <Link
              className={classes.link}
              to="/info#contacts"
              activeClassName="selected"
              smooth={true}
            >
              Контакты
            </Link>
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

        <div><Author logged={logged}
          openModal={openModal}
          customerInfo={customerInfo}
          logOut={logOut}/></div>

        <NavLink exact to="/cart" className="cart-nav">
          <div className="account-menu">
            <div className="account-menu__accountIcon">{cartIcon}
              <span className='amount-cart-items'>{cartInfo.length}</span>
            </div>
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

const mapStateToProps = ({products, userSignin, getCustomer, userRegister, registeredData, cartReducer }) => {
  return {
    products: products.products,
    userInfo: userSignin.userInfo,
    logged: userSignin.logged,
    customerInfo: getCustomer.customerInfo,
    registered: userRegister.registered,
    registeredData: registeredData,
    cartInfo: cartReducer.cartInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    searchChange: (text) => dispatch(searchChange(text)),
    getProductsBySearch: (text) => dispatch(getProductsBySearch(text)),
    setCurrentProduct: (product) => dispatch(setCurrentProduct(product)),
    openModal: () => dispatch(openModal()),
    getCustomer: () => dispatch(getCustomer()),
    signIn: (email, password) => dispatch(signIn(email, password)),
    syncCart: (logged) => dispatch(syncCart(logged)),
    getCart: () => dispatch(getCart()),
    logOut: () => dispatch(logOut())
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(withRouter(Header)));