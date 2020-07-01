import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuListComposition from '../Menu/MenuListComposition';
import accountIcon from '../../svg/accountIcon';
import cartIcon from '../../svg/cartIcon';
import logo from '../../svg/logo';

import './Header.scss';
import Grid from "@material-ui/core/Grid";
import Navigation from "./Navigation/Navigation";

import { searchChange, getProductsBySearch } from '../../store/actions/actions';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { setCurrentProduct } from '../../store/actions/actions';

import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        margin: "0 auto",
    },
    lightColorIcons: {
        color: '#fff'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        position: 'relative',
    },
    iconButton: {
        padding: 10,
        backgroundColor: "#C2C8D0"
    },
    expandMore: {
        color: "#000"
    },
    customInput: {
        width: "100%",
        height: "50px",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.01)",
        borderRadius: "20px",
        paddingLeft: '2%',
        display: 'grid',
        gridTemplateColumns: '10% 1fr',
        justifyItems: 'start',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    customDiv: {
        zIndex: "2",
        width: "500px",
        height: "200px",
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
    const { searchChange, getProductsBySearch, productsBySearch, history, setCurrentProduct } = props;
    const classes = useStyles();
    const [value, setValue] = useState('');

    const productsListBySearch = productsBySearch.map((prodBySearch, index) =>
        (<Typography key={index} component="div" className={classes.customDiv}>
            <Typography component='div' className={classes.customInput} onClick={() => {
                setValue('')
                searchChange('')
                getProductsBySearch({ query: '' })
                setCurrentProduct(prodBySearch)
                history.push(`/products/filter/${prodBySearch.itemNo}`)
            }}>
                <Typography component='div'><Typography component='img' className={classes.imgMini} alt='photo' src={prodBySearch.imageUrls[0]} /></Typography>
                <Typography component='div'>{prodBySearch.name}</Typography>
            </Typography>
        </Typography>));
    productsBySearch.length = 5;

    // const resetValue = () => {
    //     setValue('')
    //     searchChange('')
    //     getProductsBySearch({ "query": '' })
    // }

    const onChangeHandler = (e) => {
        setValue(e.target.value)
        searchChange(e.target.value)
        getProductsBySearch({ "query": e.target.value.trim() })
    }


    const phoneNumber = (
        <MenuListComposition
            firstItem={
                <div className="menu-item">
                    <div><a href="tel" className="menu-item__tel-number"><span>0 (800) 21 21 50</span></a></div>
                    <ExpandMoreIcon className={classes.expandMore} fontSize="small" />
                </div>
            }
            secondItem={
                <div className="menu-item">
                    <div><a href="tel" className="menu-item__tel-number">0 (44) 377 70 11</a> &nbsp;</div>
                    <div>Киев</div>
                </div>
            }
            thirdItem={
                <div className="menu-item">
                    <div><a href="tel" className="menu-item__tel-number">0 (56) 370 36 53</a> &nbsp;</div>
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
                    <div>Войти</div>
                </div>
            }
            thirdItem={
                <div>
                    <hr className="hr" />
                    <div className="menu-item" >
                        Зарегистрироваться
                    </div>
                </div>
            }
        >
        </MenuListComposition>
    )
    return (
        <div className="classes.root">
            <div className='Header__top'>
                <Grid container>
                    <Grid item md={12}>
                        <span className='Header__text'>Магазин</span>
                        <span className='Header__text'>Кредит</span>
                        <span className='Header__text'>Доставка И Оплата</span>
                        <span className='Header__text'>Гарантии</span>
                        <span className='Header__text'>О Компании</span>
                        <span className='Header__text'>Контакты</span>
                        <span className='Header__text'>Карта сайта</span>
                    </Grid>
                </Grid>
            </div>
            <div className="container header" >

                <NavLink exact to="/">
                    <div className="logo">{logo}</div>
                </NavLink>

                <div className="search-form">
                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Поиск товаров"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            value={value}
                            autoFocus
                            onChange={onChangeHandler}
                            // onBlur={resetValue}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search" disabled >
                            <SearchIcon className={classes.lightColorIcons} />
                        </IconButton>
                    </Paper>
                    <Typography component='div' className={classes.productsListBySearch}>
                        {productsListBySearch}
                    </Typography>
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
    )
};

const mapStateToProps = store => {
    return {
        productsBySearch: store.products.productsBySearch
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchChange: (text) => dispatch(searchChange(text)),
        getProductsBySearch: (text) => dispatch(getProductsBySearch(text)),
        setCurrentProduct: (product) => dispatch(setCurrentProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));