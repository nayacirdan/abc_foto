import constants from '../../constans/constans';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON('UserInfo') || null;

const initialState = {
  userInfo: userInfo,
  loading: false,
  logged: false,
  error: null
};

const userSignin = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_SIGNIN_REQUEST:
      return { loading: true };
    case constants.USER_SIGNIN_SUCCESS:
      return {...state, loading: false};
    case constants.USER_SIGNIN_LOGGED:
      return {...state, logged: true };
    case constants.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };

    default: return state;
  }
};

export {
  userSignin
};