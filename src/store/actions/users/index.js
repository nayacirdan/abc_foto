import { signInRequest, getCustomerRequest, registerRequest } from '../../../ajax/users/requests';
import constants from '../../constans/constans';
import Cookie from 'js-cookie';
import Axios from 'axios';

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: constants.USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await signInRequest(email, password);
    dispatch({type: constants.USER_SIGNIN_SUCCESS, payload: data});
    dispatch({type: constants.USER_SIGNIN_LOGGED});
    Cookie.set('UserInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({type: constants.USER_SIGNIN_FAIL, payload: error.message});
  }
};

const register = (firstName, lastName, login, email, password, telephone) => async (dispatch) => {
  try {
    debugger;
    const { data } = await registerRequest(firstName, lastName, login, email, password, telephone);
    dispatch({type: constants.USER_REGISRT_SUCCESS, payload: data.registrationSuccess});
  } catch (error) {
    dispatch({type: constants.USER_REGISRT_FAIL, payload: error.message});
  }
};

const loggedIn = () => (dispatch) => {
  dispatch({type: constants.USER_SIGNIN_LOGGED});
};

const getCustomer = () => async (dispatch, getState) => {
  const {userSignin} = getState();
  try {
    const {data} = await getCustomerRequest(userSignin.userInfo.token);
    dispatch({type: constants.USER_GET_INFO, payload: data});
  } catch (error) {
    dispatch({type: constants.USER_GET_INFO_FAIL, payload: error.message});
  }
};

export {
  signIn,
  loggedIn,
  getCustomer,
  register
};