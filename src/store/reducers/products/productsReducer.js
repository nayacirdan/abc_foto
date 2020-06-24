import Actions from '../../constans/constans';

const initialState = {
    products: [],
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
        default:
            return state
    }
};

export default products;