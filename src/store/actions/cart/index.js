import constants from '../../constans/constans';
import {addProductToDB, addProductToLs, loadProdutcsToDb, loadCart} from '../../../ajax/cart/requests';

const addToCart = (product) => async (dispatch, getState) => {
  const {userSignin} = getState();
  if (userSignin.logged) {
    try {
      const {data} = await addProductToDB(product, userSignin.userInfo.token);
      dispatch({type: constants.ADD_TO_CARD_DB, payload: data});
    } catch (error) {
      dispatch({type: constants.ADD_TO_CARD_DB_FAIL, payload: error});
    }
  } else {
    const data = addProductToLs(product);
    dispatch({type: constants.ADD_TO_CARD_LOCAL, payload: data});
  }
};

const syncCart = () => async (dispatch, getState) => {
  const lScart = JSON.parse(localStorage.getItem('productCartLs'));
  const {userSignin} = getState();
  if (userSignin.logged && lScart) {
    const data = lScart.map((elem) => {
      return {
        product: elem._id
      };
    });

    const cart = {
      products: data
    };

    try {
      const {cartData} = await loadProdutcsToDb(cart, userSignin.userInfo.token);
      dispatch({type: constants.SYNCHROZATION_CART, payload: cartData});
      localStorage.removeItem('productCartLs');
    } catch (error) {
      dispatch({type: constants.SYNCHROZATION_CART_FAIL, payload: error});
    }
  }
};

const getCart = () => async (dispatch, getState) => {
  const {userSignin} = getState();
  if (userSignin.logged) {
    const {data} = await loadCart(userSignin.userInfo.token);
    const cart = data ? await parseCart(data.products) : [];
    dispatch({type: constants.LOAD_CART, payload: cart});
  }
};

const parseCart = (data) => {
  const newArray = data.map((item) => {
    return item.product;
  });
  return newArray;
};

const clearCart = () => dispatch => {
  dispatch({type: constants.CLEAR_CART});
};

export {
  addToCart,
  syncCart,
  getCart,
  clearCart
};