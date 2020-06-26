import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    // axios.get('/products.json')
    axios.get('/products')
        .then(res => {
            dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data})
        })
};

export const openModal=()=>(dispatch)=>{
    debugger;
    dispatch({type: Actions.OPEN_MODAL})
}

export const closeModal=()=>(dispatch)=>{
    debugger;
    dispatch({type: Actions.CLOSE_MODAL})
}

export const setModalType=(modalType)=>(dispatch)=>{
    debugger;
    dispatch({type: Actions.SET_MODAL_TYPE, payload:modalType})
}