import {combineReducers} from "redux";
import products from './products/productsReducer';
import categories from "./categories/categoriesReducer";
import categoryPage from "./categoryPage/categoryPage";
import filters from "./filters/filterReducer";

const reducer=combineReducers({
    products, categories, categoryPage, filters
})

export default reducer;