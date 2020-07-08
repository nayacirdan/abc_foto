import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
  dispatch({ type: Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING, payload: [] });
  axios.get('/products')
    .then(res => {
      dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data });
    });
};

export const getProductsBySearch = (text) => (dispatch) => {
  if (text.query !== '') {
    axios.post('/products/search', text)
      .then(res => {
        // const filtered = res.data.filter(item => {
        //     return res.data.name.toLowerCase().includes(text.toLowerCase())
        // })
        dispatch({ type: Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING, payload: res.data });
      });
    // .catch(error => {
    //     dispatch({ type: Actions.FETCH_PRODUCTS_FAILED, error })
    // })
  } else {
    dispatch({ type: Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING, payload: [] });
  }
};
export const openModal = () => (dispatch) => {
  dispatch({ type: Actions.OPEN_MODAL });
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: Actions.CLOSE_MODAL });
};

export const setModalType = (modalType) => (dispatch) => {
  dispatch({ type: Actions.SET_MODAL_TYPE, payload: modalType });
};

export const getFilteredProducts = (text) => (dispatch) => {
  if (text.query !== '') {
    axios.post('/products/search', text)
      .then(res => {
        // const filtered = res.data.filter(item => {
        //     return res.data.name.toLowerCase().includes(text.toLowerCase())
        // })
        dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data });
      });
    // .catch(error => {
    //   dispatch({ type: Actions.FETCH_PRODUCTS_FAILED, error })
    // })
  } else {
    dispatch(getProducts());
  }
};

export const getCategory = (categoryName) => (dispatch) => {
  axios.get(`/catalog/${categoryName}`)
    .then(res => {
      dispatch({ type: Actions.GET_CATEGORY, payload: res.data });
    });
};

export const filterProducts = (filterParams) => (dispatch) => {
  console.log('filterParams', filterParams);
  axios.get(`/products/filter?${filterParams}`)
    .then(res => {
      dispatch({ type: Actions.FILTER_PRODUCTS, payload: res.data });
      dispatch({ type: Actions.SET_PAGES, payload: res.data.productsQuantity });
    });
};

export const setPerPage = (quantity) => (dispatch) => {
  dispatch({ type: Actions.SET_PERPAGE, payload: quantity });
};

export const setCurrentPage = (page) => (dispatch) => {
  dispatch({ type: Actions.SET_CURRENT_PAGE, payload: page });
};

export const setSearchFilters = (filterString) => (dispatch) => {
  console.log('setSearchFilters');
  dispatch({ type: Actions.SET_SEARCH_FILTERS, payload: filterString });
};

export const setSortProducts = (value) => (dispatch) => {
  dispatch({ type: Actions.SET_SORT_PRODUCTS, payload: value });
};

export const getAllCatalog = () => (dispatch) => {
  axios.get('/catalog')
    .then(res => {
      dispatch({ type: Actions.GET_ALL_CATALOG, payload: res.data });
    });
};
/* http://localhost:3000/products/filter?categories=notphotocameras */

export const searchChange = (text) => (dispatch) => {
  dispatch({ type: Actions.SEARCH_CHANGE, payload: text });
};

export const setCurrentProduct = (product) => (dispatch) => {
  dispatch({ type: Actions.SET_CURRENT_PRODUCT, payload: product });
};