import Actions from '../../constans/constans';

const initialState = {
  locationFilters: '',
  categoryFilters: []
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_FILTERS: {
      return {...state, locationFilters: action.payload};
    }
    case Actions.SET_FILTERS_BY_CATEGORY: {
      return {...state, categoryFilters: action.payload};
    }

    default: {
      return state;
    }
  }
};

export default filters;
