import { SEARCH_INPUT } from '../actions/search_actions';

const searchReducer = (state = "", action) => {
    Object.freeze(state);

    switch (action.type) {
        case SEARCH_INPUT:
            return action.input;
        default:
            return state;
    }
};

export default searchReducer;