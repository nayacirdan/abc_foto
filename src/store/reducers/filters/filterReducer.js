import Actions from '../../constans/constans';

const initialState = {
  locationFilters: '',
  categoryFilters: [],
  queriesObj: {}
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_FILTERS: {
      return {...state, locationFilters: action.payload};
    }
    case Actions.SET_FILTERS_BY_CATEGORY: {
      return {...state, categoryFilters: action.payload};
    }
    case Actions.ADD_FILTERS_OPTIONS: {
      return {...state, categoryFilters: action.payload};
    }
    case Actions.ADD_FILTER_STRING: {
      return {...state, locationFilters: action.payload};
    }
    case Actions.SET_FILTERS_QUERY: {
      return {...state, queriesObj: action.payload};
    }

    default: {
      return state;
    }
  }
};

export default filters;
