import Actions from '../../constans/constans';

const initialState = {
  modalIsOpen: false
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {...state, modalIsOpen: !state.modalIsOpen};

    default:
      return state;
  }
};

export default modals;