import constants from '../../constans/constans';

const initialState = {
  userInfo: null,
  loading: false,
  logged: false,
  error: null
};

const userSignin = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_SIGNIN_REQUEST:
      return {...state, loading: true };
    case constants.USER_SIGNIN_SUCCESS:
      return {...state, loading: false, userInfo: action.payload};
    case constants.USER_SIGNIN_LOGGED:
      return {...state, logged: true };
    case constants.USER_LOGOUT:
      return {...state, logged: false, userInfo: null };
    case constants.USER_SIGNIN_FAIL:
      return {...state, loading: false, error: action.payload };

    default: return state;
  }
};

export {
  userSignin
};