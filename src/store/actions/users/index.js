import { signInRequest, getCustomerRequest, registerRequest } from '../../../ajax/users/requests';
import constants from '../../constans/constans';
import Cookie from 'js-cookie';

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

const register = (firstName, lastName, email, login, password, telephone) => async (dispatch) => {
  try {
    await registerRequest(firstName, lastName, email, login, password, telephone);
    dispatch({type: constants.USER_REGISTER_SUCCESS, payload: true});

    localStorage.setItem('registerAuth', JSON.stringify({email, password}));
  } catch (error) {
    dispatch({type: constants.USER_REGISTER_FAIL, payload: error.message});
  }
};

const getCustomer = () => async (dispatch, getState) => {
  const {userSignin} = getState();
  const token = Cookie.getJSON('UserInfo');
  try {
    if (token) {
      dispatch({type: constants.USER_SIGNIN_LOGGED});
      dispatch({type: constants.USER_SIGNIN_SUCCESS, payload: token});
      const {data} = await getCustomerRequest(userSignin.userInfo.token);
      dispatch({type: constants.USER_GET_INFO, payload: data});
    }
  } catch (error) {
    dispatch({type: constants.USER_GET_INFO_FAIL, payload: error.message});
  }
};

export {
  signIn,
  getCustomer,
  register
};