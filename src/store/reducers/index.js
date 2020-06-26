import { combineReducers } from "redux";
import products from "./products/productsReducer";
import modals from "./modals/modalsReducer";

const reducer = combineReducers({
  products,modals
});

export default reducer;
