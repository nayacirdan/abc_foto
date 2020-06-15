import React, {useState} from 'react';
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
import SubMenu from "./Navigation/SubMenu";
import Navigation from "./Navigation/Navigation";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        margin: "0 auto",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        backgroundColor: "#C2C8D0"
    },
    expandMore: {
        color: "#000"
    }
}));

const Header = () => {
    const classes = useStyles();

    const [isHovering, setIsHovering] = useState(false)

    const toggleHoverState = () => {
        setIsHovering(!isHovering)
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
                    <Grid item md={8}>
                        <span className='Header__text'>Магазин</span>
                        <span className='Header__text'>Кредит</span>
                        <span className='Header__text'>Доставка И Оплата</span>
                        <span className='Header__text'>Гарантии</span>
                        <span className='Header__text'>О Компании</span>
                        <span className='Header__text'>Контакты</span>
                        <span className='Header__text'>Карта сайта</span>
                    </Grid>
                    <Grid item md={4}>
                        <div className='Header__text2'>Укр/<strong>Рус</strong></div>
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
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
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

export default Header;