import Actions from '../../constans/constans';

const currentProduct = (state = null, action) => {
    console.log(action.type)
    switch (action.type) {
        case Actions.SET_CURRENT_PRODUCT:
            return action.payload;
        default:
            return state
    }
};

export default currentProduct;
