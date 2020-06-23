import { combineReducers } from "redux";
import products from "./products/productsReducer";

const reducer = combineReducers({
  products,
});

export default reducer;
