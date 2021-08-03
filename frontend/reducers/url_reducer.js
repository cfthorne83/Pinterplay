import { UPDATE_URL } from '../actions/url_action';

const urlReducer = (state = window.location.href.split("/").pop(), action) => {
    Object.freeze(state);

    switch (action.type) {
        case  UPDATE_URL:
            // return action.modal;
            return Object.assign({}, { url: action.url })
        default:
            return state;
    }
};

export default urlReducer;