import Actions from '../../constans/constans';

const initialState= {
    products: [],
    productsQuantity: null,
 }

const products = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return action.payload;
        case Actions.FILTER_PRODUCTS:
            return {...state, productsQuantity:action.payload.productsQuantity, products:action.payload.products};

        default:
            return state
    }
};

export default products;