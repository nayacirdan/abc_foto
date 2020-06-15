import {combineReducers} from "redux";
import products from './products/productsReducer';
import currentProduct from './currentProductReducer/currentProductReducer';

const reducer=combineReducers({
    products,
    currentProduct
})

export default reducer;