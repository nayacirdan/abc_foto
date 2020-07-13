import Actions from '../../constans/constans';

const initialState = {
  locationFilters: ''
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_FILTERS: {
      return {...state, locationFilters: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default filters;
