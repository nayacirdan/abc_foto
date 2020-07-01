import Actions from "../../constans/constans";

const initialState = {
    modalIsOpen: false,
    modalType: ''
}

const modals = (state = initialState, action) => {
    switch (action.type) {
        case Actions.OPEN_MODAL:
            debugger;
            return {...state, modalIsOpen: true}

        case Actions.CLOSE_MODAL:
            return {...state, modalIsOpen: false}

        case Actions.SET_MODAL_TYPE:
            return {...state, modalType: action.payload}

        default:
            return state

    }
}

export default modals;