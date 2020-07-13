import Actions from '../../constans/constans';

const initialState = {
  productsPerPage: 3,
  currentPage: 1,
  sortBy: 'currentPrice',
  pagesQuantity: 0
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
    default: return state;
  }
};

export default categoryPage;