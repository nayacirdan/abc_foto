import Actions from '../../constans/constans';

const initialState = {
  productsPerPage: 3,
  currentPage: 1,
  sortBy: 'currentPrice',
  pagesQuantity: 0,
  minCategoryPrice: 0,
  maxCategoryPrice: 0,
  minSelectedPrice: null,
  maxSelectedPrice: null,
  filterIsOpened: true
};

const matchCeils = (payload, productPerPage) => {
  return Math.ceil(payload / productPerPage);
};

const categoryPage = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_PERPAGE:
      return { ...state, productsPerPage: action.payload };
    case Actions.SET_PAGES:
      return { ...state, pagesQuantity: matchCeils(action.payload, state.productsPerPage) };
    case Actions.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case Actions.SET_SORT_PRODUCTS:
      return { ...state, sortBy: action.payload };
    case Actions.SET_PRICES:
      return { ...state, minCategoryPrice: action.minPrice, maxCategoryPrice: action.maxPrice };
    case Actions.SET_MIN_MAX_PRICES:
      return { ...state, minSelectedPrice: action.minPrice, maxSelectedPrice: action.maxPrice };
    case Actions.TOGGLE_FILTER_DRAWER:
      return {...state, filterIsOpened: action.payload};
    default: return state;
  }
};

export default categoryPage;