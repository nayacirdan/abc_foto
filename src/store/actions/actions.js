import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    // axios.get('/products.json')
    axios.get('/products')
        .then(res => {
            dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data})
        })
};

export const getCategory = (categoryName) => (dispatch) => {
    axios.get(`/catalog/${categoryName}`)
        .then(res => {
            dispatch({ type: Actions.GET_CATEGORY, payload: res.data})
        })
};

export const filterProducts = (filterParams) => (dispatch) => {
    axios.get(`/products/filter?${filterParams}`)
        .then(res => {
            dispatch({ type: Actions.FILTER_PRODUCTS, payload: res.data});
            dispatch({ type: Actions.SET_PAGES, payload: res.data.productsQuantity});
        })
};

export const setPerPage=(quantity)=>(dispatch)=>{
    dispatch({type:Actions.SET_PERPAGE, payload:quantity})
}

export const setCurrentPage=(page)=>(dispatch)=>{
    dispatch({type:Actions.SET_CURRENT_PAGE, payload:page});
}
/*http://localhost:3000/products/filter?categories=notphotocameras*/