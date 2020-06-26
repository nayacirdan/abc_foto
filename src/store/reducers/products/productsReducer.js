import Actions from '../../constans/constans';

const initialState= {
    products: [],
    productsBySearch: [],
    productsQuantity: null,
    product: '',
    currentProduct: null
 }

const products = (state = initialState, action) => {
    console.log("PRODUCTS BY SEARCH", state.productsBySearch)
    console.log("PRODUCTS BY FETCH", state.products)
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return { ...state, products: action.payload, productsBySearch: action.payload  };
        case Actions.FETCH_PRODUCTS_2:
            return { ...state, productsBySearch: action.payload  };
        case Actions.SEARCH_CHANGE:
            return { ...state, product: action.payload };
        case Actions.FILTER_PRODUCTS:
            return {...state, productsQuantity:action.payload.productsQuantity, products:action.payload.products};
        case Actions.SET_CURRENT_PRODUCT:
            return { ...state, currentProduct: action.payload }
        default:
            return state
    }
};

export default products;