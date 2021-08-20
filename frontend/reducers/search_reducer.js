import { SEARCH_INPUT } from '../actions/search_actions';

const searchReducer = (state = "", action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEARCH_INPUT:
            if (action.input){
                return action.input;
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default searchReducer;