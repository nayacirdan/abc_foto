import Actions from "../../constans/constans";

const initialState = {
    categories: [],
    currentCategory: {}
}
const categories = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_CATEGORY:
            return {...state, currentCategory: action.payload};

        default:
            return state;
    }
}
export default categories;