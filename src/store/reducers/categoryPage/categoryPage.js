import Actions from '../../constans/constans'

const initialState={
    productsPerPage:2,
    currentPage:1,
    sortBy:null,
    pagesQuantity:0
}

const categoryPage=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.SET_PERPAGE:
            return { ...state, productsPerPage:action.payload};
        case Actions.SET_PAGES:
            const pagesQuantity=Math.round(action.payload/state.productsPerPage);
            return {...state, pagesQuantity: pagesQuantity};
        case Actions.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        default: return state
    }
}

export default categoryPage