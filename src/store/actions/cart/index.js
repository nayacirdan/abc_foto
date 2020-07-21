import constants from '../../constans/constans';
import {addProductToDB, addProductToLs, loadProdutcsToDb, loadCart} from '../../../ajax/cart/requests';
// import products from './../../reducers/products/productsReducer';

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

const syncCart = (logged) => async (dispatch, getState) => {
  const lScart = JSON.parse(localStorage.getItem('productCartLs'));
  debugger;
  if (logged && lScart) {
    const {userSignin} = getState();
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

const getCart = (logged) => async (dispatch, getState) => {
  if (logged) {
    const {userSignin} = getState();
    const {data} = await loadCart(userSignin.userInfo.token);
    dispatch({type: constants.SYNCHROZATION_CART, payload: data});
  }
};

export {
  addToCart,
  syncCart,
  getCart
};