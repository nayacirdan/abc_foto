import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles';

import './SignInModal.scss';
import { connect } from 'react-redux';

import { openModal} from '../../store/actions/actions';
import TabPanel from '../../components/TabPanel/TabPanel';
import Box from '@material-ui/core/Box';

import Sign from '../Modals/sing';
import Registr from '../Modals/registr';

export const SignAndRegForm = ({openModal}) => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <Box className='gray-bg' onClick={openModal}></Box>
      <Box className="modal-signin">
        <span className="close-modal" onClick={openModal}>
          <img src="/images/promotions/close-modal.png" alt="img" />
        </span>
        <Box className="Mui-container">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary" >
            <Tab label="Войти" />
            <Tab label="Зарегистрироваться" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Sign/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Registr/>
            </TabPanel>
          </SwipeableViews>
          {/* <hr className="hr-line-below-form" />
                <div className="reg-links">
                    <div className="logo">
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
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
                    </div> */}
          {/* </div> */}
        </Box>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal())
  };
};

export default connect(null, mapDispatchToProps)(SignAndRegForm);