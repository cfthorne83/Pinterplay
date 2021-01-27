import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from "lodash/merge";

const modalReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            // return action.modal;
            return Object.assign({}, { modal: action.modal }, { options: action.options })
            // return merge({}, { modal: action.modal }, { options: action.options });
            // return merge({}, { modal: action.modal }, { options: action.options });
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modalReducer;