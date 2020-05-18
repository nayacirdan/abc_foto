import React from 'react';
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
                <div className="menu-item" >
                    Зарегистрироваться
                    </div>
            }
        >
        </MenuListComposition>
    )
    return (
        <div className="classes.root">
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
        </div>
    )
};

export default Header;