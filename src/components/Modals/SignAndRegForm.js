import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './SignInModal.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SignAndRegForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="gray-bg">
          <div className="modal-signin">
            <div className="container">
              <div className="modal-signin__sign-reg-btn">
                <div className="modal-signin__sign-reg-btn__sign">
                  <p className="modal-signin__sign-reg-btn_text-header">
                  Войти</p>
                </div>
                <div className="modal-signin__sign-reg-btn__reg">
                  <p className="modal-signin__sign-reg-btn_text-header">
                  Зарегистрироваться</p>
                </div>
              </div>
              <div className="form">
              <form action="#">
                <label className="form_label">
                <span className="form_label_text">Ваше имя</span>
                <input
                placeholder="Имя"
                type="text"
                />
                </label>
                <label className="form_label">
                <span className="form_label_text">E-mail</span>
                <input
                placeholder="E-mail"
                type="text"
                />
                </label>
                <label className="form_label">
                <span className="form_label_text">Номер телефона</span>
                <input
                placeholder="+38(050)355 55 55"
                type="tel"
                />
                </label>
                <label className="form_label">
                <span className="form_label_text">Ваш пароль</span>
                <input
                placeholder="****1"
                type="password"
                />
                </label>
                <label className="form_label">
                <span className="form_label_text">Подтверждение пароля</span>
                <input
                placeholder="****1"
                type="password"
                />
                </label>
                <button>Зарегистрироваться</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}