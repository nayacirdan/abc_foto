import Actions from '../../constans/constans';

const initialState = {
  modalIsOpen: false,
  modalOrderIsOpen: false
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {...state, modalIsOpen: !state.modalIsOpen};
    case Actions.TOGGLE_MODAL_ORDER:
      return {...state, modalOrderIsOpen: action.payload};
    default:
      return state;
  }
};

export default modals;