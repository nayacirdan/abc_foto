import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    axios.get('/products')
        .then(res => {
            dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data })
        })
};

export const getFilteredProducts = (text) => (dispatch) => {
    if(text.query) {
        axios.post('/products/search', text)
        .then(res => {
            // const filtered = res.data.filter(item => {
            //     return res.data.name.toLowerCase().includes(text.toLowerCase())
            // })
            dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data })
        }) 
        .catch(error => {
            dispatch({ type: Actions.FETCH_PRODUCTS_FAILED, error })
        })
    } else {
        dispatch(getProducts());
    }
};

export const searchChange = (text) => (dispatch) => {
    dispatch ({ type: Actions.SEARCH_CHANGE, payload: text })
}