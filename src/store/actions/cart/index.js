import constants from '../../constans/constans';
import {addProductToDB, addProductToLs, loadProdutcsToDb, loadCart, clearCartFromDb, deleteCartItem} from '../../../ajax/cart/requests';

const addToCart = (product) => async (dispatch, getState) => {
  const {userSignin} = getState();
  if (userSignin.logged) {
    try {
      const {data} = await addProductToDB(product, userSignin.userInfo.token);
      const newCart = data ? await parseCart(data.products) : [];
      console.log(newCart);
      dispatch({type: constants.ADD_TO_CARD_DB, payload: newCart});
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
      const newCart = data ? await parseCart(cartData.products) : [];
      console.log(newCart);
      dispatch({type: constants.SYNCHROZATION_CART, payload: newCart});
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
  } else {
    const lScart = JSON.parse(localStorage.getItem('productCartLs'));
    lScart && dispatch({type: constants.LOAD_CART, payload: lScart});
  }
};

const parseCart = (data) => {
  const newArray = data.map((item) => {
    return item.product;
  });
  return newArray;
};

const clearCart = () => async (dispatch, getState) => {
  try {
    const {userSignin} = getState();
    await clearCartFromDb(userSignin.userInfo.token);
    dispatch({type: constants.CLEAR_CART});
  } catch (error) {
    dispatch({type: constants.ADD_TO_CARD_DB_FAIL, payload: error});
  }
};

const deleteItem = (product) => async (dispatch, getState) => {
  const {userSignin} = getState();
  if (userSignin.logged) {
    try {
      const {data} = await deleteCartItem(product, userSignin.userInfo.token);
      const cart = data ? await parseCart(data.products) : [];
      dispatch({type: constants.DELETE_CART_ITEM, payload: cart});
    } catch (error) {
      dispatch({type: constants.ADD_TO_CARD_DB_FAIL, payload: error});
    }
  } else {
    const localCart = JSON.parse(localStorage.getItem('productCartLs'));
    const newCart = localCart.filter((item) => item._id !== product._id);
    localStorage.setItem('productCartLs', JSON.stringify(newCart));
    dispatch({type: constants.DELETE_CART_ITEM, payload: JSON.parse(localStorage.getItem('productCartLs'))});
  }
};

export {
  addToCart,
  syncCart,
  getCart,
  clearCart,
  deleteItem
};