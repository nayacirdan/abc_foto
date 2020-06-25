import Actions from '../../constans/constans';

const initialState= {
    products: [],
    productsQuantity: null,
    product: '',
 }

const products = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        case Actions.SEARCH_CHANGE:
            return { ...state, product: action.payload }
        case Actions.FETCH_PRODUCTS_FAILED:
            return { ...state }
        case Actions.FILTER_PRODUCTS:
            return {...state, productsQuantity:action.payload.productsQuantity, products:action.payload.products};

        default:
            return state
    }
};

export default products;