import Actions from '../../constans/constans';

const initialState = {
  allCategories: [],
  currentCategory: {}
};
const categories = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CATEGORY:
      return {...state, currentCategory: action.payload};
    case Actions.GET_ALL_CATALOG:
      return {...state, allCategories: action.payload};
    case Actions.SET_CURRENT_CATEGORY:
      return {...state, currentCategory: action.payload};
    default:
      return state;
  }
};
export default categories;