import Actions from '../constans/constans';
import axios from 'axios';
import {formFilterStringFragment} from '../../utils/utils';

export const getProducts = () => (dispatch) => {
  dispatch({ type: Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING, payload: [] });
  axios.get('http://codeandcatchfire.kiev.ua:5010/products')
  // axios.get('http://codeandcatchfire.kiev.ua:5010/products')
    .then(res => {
      dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data });
    });
};
 
export const getProductsBySearch = (text) => (dispatch) => {
  if (text.query !== '') {
    axios.post('http://codeandcatchfire.kiev.ua:5010/products/search', text)
    // axios.post('http://codeandcatchfire.kiev.ua:5010/products/search', text)
      .then(res => {
        dispatch({ type: Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING, payload: res.data });
      });
  } else {
    dispatch({ type: Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING, payload: [] });
  }
};
export const openModal = () => (dispatch) => {
  dispatch({ type: Actions.OPEN_MODAL });
};

export const getFilteredProducts = (text) => (dispatch) => {
  if (text.query !== '') {
    axios.post('http://codeandcatchfire.kiev.ua:5010/products/search', text)
    // axios.post('http://codeandcatchfire.kiev.ua:5010/products/search', text)
      .then(res => {
        dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data });
      });
  } else {
    dispatch(getProducts());
  }
};

export const getCategory = (categoryName) => (dispatch) => {
  axios.get(`http://codeandcatchfire.kiev.ua:5010/catalog/${categoryName}`)
  // axios.get(`http://codeandcatchfire.kiev.ua:5010/catalog/${categoryName}`)
    .then(res => {
      dispatch({ type: Actions.GET_CATEGORY, payload: res.data });
    });
};

export const filterProducts = (filterParams) => (dispatch) => {
  axios.get(`http://codeandcatchfire.kiev.ua:5010/products/filter?${filterParams}`)
  // axios.get(`http://codeandcatchfire.kiev.ua:5010/products/filter?${filterParams}`)
    .then(res => {
      dispatch({ type: Actions.FILTER_PRODUCTS, payload: res.data });
      dispatch({ type: Actions.SET_PAGES, payload: res.data.productsQuantity });
    });
};

export const setPerPage = (quantity) => (dispatch) => {
  dispatch({ type: Actions.SET_PERPAGE, payload: quantity });
};

export const setCurrentCategory = (category) => (dispatch) => {
  dispatch({ type: Actions.SET_CURRENT_CATEGORY, payload: category });
};

export const setCurrentPage = (page) => (dispatch) => {
  dispatch({ type: Actions.SET_CURRENT_PAGE, payload: page });
};

export const setSearchFilters = (filterString) => (dispatch) => {
  dispatch({ type: Actions.SET_SEARCH_FILTERS, payload: filterString });
};

export const setSortProducts = (value) => (dispatch) => {
  dispatch({ type: Actions.SET_SORT_PRODUCTS, payload: value });
};

export const getAllCatalog = () => (dispatch) => {
  axios.get('http://codeandcatchfire.kiev.ua:5010/catalog')
  // axios.get('http://codeandcatchfire.kiev.ua:5010/catalog')
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

export const getFiltersByCategory = (category) => (dispatch) => {
  axios.get(`http://codeandcatchfire.kiev.ua:5010/filters/filter?categories=${category}`)
  // axios.get(`http://codeandcatchfire.kiev.ua:5010/filters/filter?categories=${category}`)
    .then(res => {
      dispatch({type: Actions.SET_FILTERS_BY_CATEGORY, payload: res.data});
    });
};

export const getAllProductsByCategory = (category) => (dispatch) => {
  axios.get(`http://codeandcatchfire.kiev.ua:5010/products/filter?categories=${category}`)
  // axios.get(`http://codeandcatchfire.kiev.ua:5010/products/filter?categories=${category}`)
    .then(res => {
      dispatch({type: Actions.GET_ALL_PRODUCT_BY_CATEGORY, payload: res.data});
    });
};

export const addToFilterString = (filterParam, filterValue, currentFilterString) => dispatch => {
  dispatch({type: Actions.ADD_FILTER_STRING, payload: formFilterStringFragment(filterParam, filterValue, currentFilterString)});
};

export const setFilterQuery = (currentQueriesObj) => dispatch => {
  dispatch({type: Actions.SET_FILTERS_QUERY, payload: currentQueriesObj});
};

export const setPrices = (minPrice, maxPrice) => dispatch => {
  dispatch({type: Actions.SET_PRICES, minPrice: minPrice, maxPrice: maxPrice});
};

export const setMinMaxPrices = (minPrice, maxPrice) => dispatch => {
  dispatch({type: Actions.SET_MIN_MAX_PRICES, minPrice: minPrice, maxPrice: maxPrice});
};

export const toggleFilterDrawer = (value) => dispatch => {
  dispatch({type: Actions.TOGGLE_FILTER_DRAWER, payload: value});
};

export const setIsDesktop = (value) => dispatch => {
  dispatch({type: Actions.SET_IS_DESKTOP, payload: value});
};

export const toggleOrderModal = (value) => dispatch => {
  dispatch({type: Actions.TOGGLE_MODAL_ORDER, payload: value});
};

export const toggleSubscribeOKModal = (value) => dispatch => {
  dispatch({type: Actions.TOGGLE_SUBSCRIBE_OK_MODAL, payload: value});
};

export const toggleSubscribeFailedModal = (value) => dispatch => {
  dispatch({type: Actions.TOGGLE_SUBSCRIBE_FAILED_MODAL, payload: value});
};
