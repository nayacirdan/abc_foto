import Actions from '../../constans/constans';

const initialState = {
  searchFilters: ''
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_FILTERS: {
      return {...state, searchFilters: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default filters;
