import React from 'react';
import accountIcon from '../../../svg/accountIcon';
import MenuListComposition from '../../../components/Menu/MenuListComposition';
import { makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';

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

const Author = (props) => {
  const {logged, openModal, customerInfo, logOut} = props;

  const classes = useStyles();

  const logOutHandler = () => {
    logOut();
  };

  const AccountMenu = (
    <div className="account-menu user" onClick={openModal}>
      <div className="account-menu__accountIcon">{accountIcon}</div>
      <div className="account-menu__iconText">Вход</div>
    </div>
  );
  
  const UserMenu = (
    <MenuListComposition
      firstItem={
        <div className="menu-item">
          <div className="account-menu">
            <div className="account-menu__accountIcon">{accountIcon}</div>
            <div className="account-menu__iconText">{customerInfo.login}</div>
          </div>
          <ExpandMoreIcon className={classes.expandMore} fontSize="small" />
        </div>
      }
      // secondItem={
      //   <div className="menu-item">
      //     <NavLink to='/user' className="menu-item__tel-number">Кабинет</NavLink>
      //   </div>
      // }
      secondItem={
        <div className="menu-item">
          <div className="menu-item__tel-number" onClick={logOutHandler}>Выход</div>
        </div>
      }
    >
    </MenuListComposition>
  );

  return (
    <div>
      {logged ? UserMenu : AccountMenu}
    </div>
  );
};

export default React.memo(Author);
