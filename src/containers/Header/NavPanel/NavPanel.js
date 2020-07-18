import React from 'react';
import clsx from 'clsx';
import { makeStyles, Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import StoreIcon from '@material-ui/icons/Store';
import { connect } from 'react-redux';

import logo from '../../../svg/logo';
import { withRouter } from 'react-router';
// import SimpleExpansionPanel from '../../../components/ExpansionPanel/ExpansionPanel';

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
  }
}));

function TemporaryDrawer ({history, categories}) {
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
  const array = ['Магазины', 'Кредит', 'Доставка и оплата', 'Гарантии', 'О компании', 'Контакты'];
  const navArray = array.map((item, key) => (
    <ListItem button key={key}>
      <ListItemText primary={item} />
    </ListItem>
  ));

  const cats = categories.map((category, id) => (
    <ListItem button
      key={id} component={Link}
      to={`/products/filter?categories=${category.name}`}
      className={classes.nested}>
      <ListItemText primary={category.name} />
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
      {/* <List>
       
        <SimpleExpansionPanel
          title={
            <MenuList>
              <MenuItem>
                <ListItemIcon><StoreIcon /></ListItemIcon>
                <ListItemText primary={'Каталог товаров'} className={classes.catTitle} />
              </MenuItem>
            </MenuList>
          }
          main={<List >
            {categories.map((category, id) => (
              <ListItem button
                key={id} component={Link}
                to={`/products/filter?categories=${category.name}`}
                className={classes.nested}>
                <ListItemText primary={category.name} />
              </ListItem>
            ))}
          </List>}
        />
      </List> */}

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
        {toggled && cats}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><AccountCircleIcon/></ListItemIcon>
          <ListItemText primary={'Личный кабинет'} />
        </ListItem>
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
    categories: store.categories.allCategories
  };
};

export default connect(mapStateToProps, null)(withRouter(TemporaryDrawer));