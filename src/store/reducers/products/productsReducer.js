import Actions from '../../constans/constans';

const products = (state = [], action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return action.payload;
        default:
            return state
    }
};

export default products;