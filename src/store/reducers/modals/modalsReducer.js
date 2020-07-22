import Actions from '../../constans/constans';

const initialState = {
  modalIsOpen: false,
  modalOrderIsOpen: false,
  subscribeOk: false,
  subscribeFailed: false
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {...state, modalIsOpen: !state.modalIsOpen};
    case Actions.TOGGLE_MODAL_ORDER:
      return {...state, modalOrderIsOpen: action.payload};
    case Actions.TOGGLE_SUBSCRIBE_OK_MODAL:
      return {...state, subscribeOk: action.payload};
    case Actions.TOGGLE_SUBSCRIBE_FAILED_MODAL:
      return {...state, subscribeFailed: action.payload};
    default:
      return state;
  }
};

export default modals;