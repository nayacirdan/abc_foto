import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    // axios.get('/products.json')
    axios.get('/products')
        .then(res => {
            dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data})
        })
};

export const setCurrentProduct = (currentProduct) => (dispatch) => {
    dispatch ({ type: Actions.SET_CURRENT_PRODUCT, payload: currentProduct })
}

