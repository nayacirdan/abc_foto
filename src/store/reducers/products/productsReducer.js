import Actions from '../../constans/constans';

const initialState = {
    products: [],
    productsBySearch: [],
    productsQuantity: null,
    product: '',
    currentProduct: null,
    recentlyViewedProducts: JSON.parse(localStorage.getItem('recentlyViewed')) || []
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return { ...state, products: action.payload, productsBySearch: [] };
        case Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING:
            return { ...state, productsBySearch: action.payload };
        case Actions.SEARCH_CHANGE:
            return { ...state, product: action.payload };
        case Actions.FILTER_PRODUCTS:
            return { ...state, productsQuantity: action.payload.productsQuantity, products: action.payload.products };
        case Actions.SET_CURRENT_PRODUCT:
            return { ...state, currentProduct: action.payload };
        case Actions.SET_RECENTLY_VIEWED_PRODUCTS:
            return { ...state, recentlyViewedProducts: action.payload }
        default:
            return state
    }
};

export default products;