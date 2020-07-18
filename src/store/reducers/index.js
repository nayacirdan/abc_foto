import { combineReducers } from 'redux';
import { userSignin } from './users/signin';
import { getCustomer } from './users/getcustomer';
import { userRegister } from './users/register';
import modals from './modals/modalsReducer';
import products from './products/productsReducer';
import categories from './categories/categoriesReducer';
import categoryPage from './categoryPage/categoryPage';
import filters from './filters/filterReducer';

const reducer = combineReducers({
  products,
  categories,
  categoryPage,
  filters,
  modals,
  userSignin,
  getCustomer,
  userRegister
});

export default reducer;