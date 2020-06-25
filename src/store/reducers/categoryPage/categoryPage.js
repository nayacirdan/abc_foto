import Actions from '../../constans/constans'

const initialState={
    productsPerPage:3,
    currentPage:1,
    sortBy:'',
    pagesQuantity:0
}

const categoryPage=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.SET_PERPAGE:
            return { ...state, productsPerPage:action.payload};
        case Actions.SET_PAGES:
            const pagesQuantity=Math.ceil(action.payload/state.productsPerPage);
            return {...state, pagesQuantity: pagesQuantity};
        case Actions.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        case Actions.SET_SORT_PRODUCTS:
            return {...state, sortBy: action.payload}
        default: return state
    }
}

export default categoryPage