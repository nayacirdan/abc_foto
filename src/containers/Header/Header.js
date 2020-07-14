import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuListComposition from '../../components/Menu/MenuListComposition';
import accountIcon from '../../svg/accountIcon';
import cartIcon from '../../svg/cartIcon';
import logo from '../../svg/logo';

import './Header.scss';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation/Navigation';

import { searchChange, getProductsBySearch, getProducts, setCurrentProduct, openModal, setModalType } from '../../store/actions/actions';
import { connect, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { withRouter } from 'react-router';

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
  lightColorIcons: {
    color: '#fff'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    position: 'relative'
  },
  iconButton: {
    padding: 10,
    backgroundColor: '#C2C8D0'
  },
  expandMore: {
    color: '#000'
  },
  customInput: {
    width: '100%',
    height: '50px',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.01)',
    borderRadius: '20px',
    paddingLeft: '2%',
    display: 'grid',
    gridTemplateColumns: '10% 1fr',
    justifyItems: 'start',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  customDiv: {
    zIndex: '2',
    width: '500px',
    height: '200px',
    marginBottom: '-30%'
  },
  productsListBySearch: {
    position: 'absolute !important',
    zIndex: '5'
  },
  imgMini: {
    width: '20px',
    height: '20px'
  }
}));

const Header = (props) => {
  const { searchChange, getProductsBySearch, history, setCurrentProduct, getProducts, products } = props;
  const classes = useStyles();

  useEffect(() => {
    searchChange();
  }, [searchChange]);

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

  // const [isHovering, setIsHovering] = useState(false);

  // const toggleHoverState = () => {
  //   setIsHovering(!isHovering);
  // };
  const dispatch = useDispatch();

  const openSignUpModal = () => {
    dispatch(setModalType('signUp'));
    dispatch(openModal());
  };
  const openSignInModal = () => {
    dispatch(setModalType('signIn'));
    dispatch(openModal());
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
    <MenuListComposition
      firstItem={
        <div className="account-menu">
          <div className="account-menu__accountIcon">{accountIcon}</div>
          <div className="account-menu__iconText">Вход</div>
        </div>
      }
      secondItem={
        <div className="menu-item">
          <div onClick={openSignInModal}>Войти</div>
        </div>
      }
      thirdItem={
        <div>
          <hr className="hr" />
          <div className="menu-item" onClick={openSignUpModal} >
                        Зарегистрироваться
          </div>
        </div>
      }
    >
    </MenuListComposition>
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

        <NavLink exact to="/">
          <div className="logo">{logo}</div>
        </NavLink>

        <div className="search-form">
          <SearchBar
            className={classes.autocomplete}
            id="combo-box-demo"
            options={products}
            getOptionLabel={(option) => option.name}
            onChangeAutocomplete={filterProductsHandler}

            style={{ width: 500 }}
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

        <div>{AccountMenu}</div>

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

const mapStateToProps = store => {
  return {
    products: store.products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    searchChange: (text) => dispatch(searchChange(text)),
    getProductsBySearch: (text) => dispatch(getProductsBySearch(text)),
    setCurrentProduct: (product) => dispatch(setCurrentProduct(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));