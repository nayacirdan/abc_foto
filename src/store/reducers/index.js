import {combineReducers} from "redux";
import products from './products/productsReducer';
import categories from "./categories/categoriesReducer";
import categoryPage from "./categoryPage/categoryPage";

const reducer=combineReducers({
    products, categories, categoryPage
})

export default reducer;