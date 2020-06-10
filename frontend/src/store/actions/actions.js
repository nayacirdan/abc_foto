import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    // axios.get('/products.json')
    axios.get('/products')
        .then(res => {
            console.log('qwe', res.data)
            dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data})
        })
};