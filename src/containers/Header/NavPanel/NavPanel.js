import React from 'react';
import clsx from 'clsx';
import { makeStyles, Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import StoreIcon from '@material-ui/icons/Store';
import { connect } from 'react-redux';
import {openModal } from '../../../store/actions/actions';
import { logOut } from '../../../store/actions/users/index';
import logo from '../../../svg/logo';
import { withRouter } from 'react-router';
import { NavHashLink } from 'react-router-hash-link';
import Navigation from '../Navigation/Navigation';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    '@media (max-width): 640': {
      width: 100
    }
  },
  fullList: {
    width: 'auto'
  },
  logoBlock: {
    backgroundColor: '#F7F5F6'
  },
  nested: {
    paddingLeft: theme.spacing(6),
    color: 'white',
    textTransform: 'capitalize',
    backgroundColor: '#51AD33',
    '&:hover': {
      color: '#51AD33'
    }
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
    fontSize: '14px'
  },
  greetengs: {
    marginLeft: 40,
    fontSize: 16,
    fontWeight: 400
  }
}));

function TemporaryDrawer ({history, categories, openModal, logged, customerInfo, logOut}) {
  const classes = useStyles();
  const [toggled, toggle] = React.useState(false);
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const array = [{name: 'Кредит', adress: '/info#credit'}, {name: 'Доставка и оплата', adress: 'info#shippingAndDelivery'}, {name: 'Гарантии', adress: '/info#guarantee'}, {name: 'Контакты', adress: '/info#contacts'}];
  const navArray = array.map((item, key) => (
    <ListItem button key={key}>
      <ListItemText>
        <NavHashLink
          className={classes.link}
          to={item.adress}
          activeClassName="selected"
          smooth={true}
        >
          {item.name}
        </NavHashLink>
      </ListItemText>
    </ListItem>
  ));
  const greetengs = (
    <>
      <List>
        <span className={classes.greetengs}>Привет,  {customerInfo.login}</span>
      </List>
      <Divider />
    </>);
  const unLogged = (
    <ListItem button onClick={openModal}>
      <ListItemIcon><AccountCircleIcon/></ListItemIcon>
      <ListItemText primary={'Вход'} />
    </ListItem>
  );

  const inLogged = (
    <ListItem button onClick={logOut}>
      <ListItemIcon><AccountCircleIcon/></ListItemIcon>
      <ListItemText primary={'Выход'} />
    </ListItem>
  );

  const cats = categories.map((category, id) => (
    <ListItem button
      key={id} component={Link}
      to={`/products/filter?categories=${category.name}`}
      className={classes.nested}>
      <ListItemText primary={category.title} />
    </ListItem>
  ));

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.logoBlock} >
        <ListItem button onClick={() => history.push('/')}>
          <ListItemText primary={logo} />
        </ListItem>
      </List>
      <Divider />
      {logged ? greetengs : null}
      <List>
        <ListItem button onClick={(e) => {
          toggle(toggled => !toggled);
          e.stopPropagation();
        }}>
          <ListItemIcon><StoreIcon /></ListItemIcon>
          <ListItemText primary={'Каталог товаров'} />
        </ListItem>
      </List>
      <List>
        {toggled && <Navigation />}
      </List>
      <Divider />
      <List>
        {logged ? inLogged : unLogged}
      </List>
      <Divider />
      <List>
        {navArray}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize='large' /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const mapStateToProps = store => {
  return {
    categories: store.categories.allCategories,
    customerInfo: store.getCustomer.customerInfo,
    logged: store.userSignin.logged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    logOut: () => dispatch(logOut())
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(withRouter(TemporaryDrawer)));