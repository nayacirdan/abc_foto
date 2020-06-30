import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import TwitterLogin from "react-twitter-login";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import PhoneIcon from "@material-ui/icons/Phone";

import "./SignInModal.scss";
import {closeModal, setModalType} from "../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";

function TabPanel(props) {
  const {children, value, index, ...other} = props;

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const SignAndRegForm = (props) => {
  const {
    values: {name, email, phone, password, confirmPassword},
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  console.table(props);

  const chooseTabValue=(modalType)=>{
    debugger;
    if (modalType==='signIn') {
      return 0;
    } else if(modalType==='signUp'){
      return 1;
    } else {
      console.log('strange things happened')
    }
  }

  const modalType=useSelector(store=>store.modals.modalType);
  debugger;
  const value=chooseTabValue(modalType);
  console.log('TABS', 'value=', value, '  modalType=',modalType);
  const dispatch = useDispatch();


  const classes = useStyles();


  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const changeReg = (event, newValue) => {
    dispatch(setModalType(event.currentTarget.name));
    console.log('changeReg', 'value=', value, '  modalType=',modalType);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const authHandler = (err, data) => {
    console.log(err, data);
  };
  const closeModalHandler = () => {
    dispatch(closeModal());
  }


  return (
    <div className={classes.root}>
      <TabPanel value={value} index={1}>
        <div className="gray-bg">
          <div className="modal-signin">
            <span className="close-modal" onClick={closeModalHandler}>
              <img src="/images/promotions/close-modal.png" alt="img"/>
            </span>
            <div className="container">
              <div className="sign-reg-header">
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={changeReg}
                    aria-label="simple tabs example"
                  >
                    <Tab label="Войти" {...a11yProps(0)} name='signIn'/>
                    <Tab label="Зарегистрироваться" {...a11yProps(1)} name='signUp'/>
                  </Tabs>
                </AppBar>
              </div>
              <form className={classes.root} onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  className="sign-reg-name"
                  id="name"
                  helperText={touched.name ? errors.name : ""}
                  error={Boolean(errors.name)}
                  onChange={handleChange}
                  value={name}
                  label="Ваше имя"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NameIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="errors-text">
                  {Boolean(errors.name) ? errors.name : ""}
                </div>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  helperText={touched.email ? errors.email : ""}
                  error={Boolean(errors.email)}
                  value={email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="errors-text">
                  {Boolean(errors.email) ? errors.email : ""}
                </div>
                <TextField
                  id="tel"
                  name="phone"
                  helperText={touched.phone ? errors.phone : ""}
                  error={Boolean(errors.phone)}
                  value={phone}
                  onChange={handleChange}
                  label="Номер телефона"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="errors-text">{errors.phone}</div>
                <TextField
                  id="password"
                  name="password"
                  label="Ваш пароль"
                  helperText={touched.password ? errors.password : ""}
                  error={Boolean(errors.password)}
                  value={password}
                  onChange={handleChange}
                  fullWidth
                  type="password"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="errors-text">{errors.password}</div>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Подтверждение пароля"
                  fullWidth
                  type="password"
                  helperText={
                    touched.confirmPassword ? errors.confirmPassword : ""
                  }
                  error={Boolean(errors.confirmPassword)}
                  value={confirmPassword}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="errors-text">{errors.confirmPassword}</div>
                <Button
                  type="submit"
                  color="primary"
                  variant="outlined"
                  disabled={!isValid}
                >
                  Зарегистрироваться
                </Button>
                <hr className="hr-line-below-form"/>
                <div className="reg-links">
                  <div className="logo">
                    <GoogleLogin
                      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                      buttonText="Login"
                    />
                  </div>
                  <div className="logo2">
                    <FacebookLogin
                      appId="1088597931155576"
                      autoLoad={false}
                      fields="name,email,picture"
                      // onClick={componentClicked}
                      icon="fa-facebook"
                      textButton="Login"
                      cssClass="my-facebook-button-class"
                      callback={responseFacebook}
                    />
                  </div>
                  <div className="logo3">
                    <TwitterLogin
                      authCallback={authHandler}
                      // consumerKey={CONSUMER_KEY}
                      // consumerSecret={CONSUMER_SECRET}
                      // callbackUrl={CALLBACK_URL}
                      buttonTheme="dark_short"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={0}>
        <div className="gray-bg">
          <div className="modal-signin signin-height">
            <span className="close-modal" onClick={closeModalHandler}>
              <img src="/images/promotions/close-modal.png" alt="img"/>
            </span>
            <div className="container">
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={changeReg}
                  aria-label="simple tabs example"
                >
                  <Tab label="Войти" {...a11yProps(0)} name='signIn'/>
                  <Tab label="Зарегистрироваться" {...a11yProps(1)} name='signUp'/>
                </Tabs>
              </AppBar>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  helperText={touched.email ? errors.email : ""}
                  error={Boolean(errors.email)}
                  value={email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="errors-text">
                  {Boolean(errors.email) ? errors.email : ""}
                </div>
                <TextField
                  id="password"
                  name="password"
                  label="Ваш пароль"
                  helperText={touched.password ? errors.password : ""}
                  error={Boolean(errors.password)}
                  value={password}
                  onChange={handleChange}
                  fullWidth
                  type="password"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="errors-text">{errors.password}</div>
                <Button type="submit" color="primary" variant="outlined">
                  Войти
                </Button>
                <hr className="hr-line-below-form"/>
                <div className="reg-links">
                  <div className="logo">
                    <GoogleLogin
                      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                      buttonText="Login"
                    />
                  </div>
                  <div className="logo2">
                    <FacebookLogin
                      appId="1088597931155576"
                      autoLoad={false}
                      fields="name,email,picture"
                      // onClick={componentClicked}
                      icon="fa-facebook"
                      textButton="Login"
                      cssClass="my-facebook-button-class"
                      callback={responseFacebook}
                    />
                  </div>
                  <div className="logo3">
                    <TwitterLogin
                      authCallback={authHandler}
                      // consumerKey={CONSUMER_KEY}
                      // consumerSecret={CONSUMER_SECRET}
                      // callbackUrl={CALLBACK_URL}
                      buttonTheme="dark_short"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};