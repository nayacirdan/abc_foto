import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../../svg/logo';
import { withRouter } from 'react-router';

// import LinksListCatalog from '../../../HOCs/CatalogLinks/LinksListCatalog';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  logoBlock: {
    backgroundColor: '#F7F5F6'
  }
});

function TemporaryDrawer ({history}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
      <List>
        <ListItem button>
          <ListItemIcon><StoreIcon /></ListItemIcon>
          <ListItemText primary={'Каталог товаров'} />
        </ListItem>
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
        <ListItem button>
          <ListItemText primary={'Магазины'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Кредит'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Доставка и оплата'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Гарантии'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'О компании'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Контакты'} />
        </ListItem>
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

export default withRouter(TemporaryDrawer);