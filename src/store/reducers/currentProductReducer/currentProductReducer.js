import Actions from '../../constans/constans';

const saveCurrentProduct = (state = null, action) => {
    switch (action.type) {
        case Actions.SET_CURRENT_PRODUCT:
            return action.payload;
        default:
            return state
    }
};

export default saveCurrentProduct;
