import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    axios('/products.json')
        .then(res => {
            dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data})
        })
};