import { SEARCH_INPUT, CLEAR_SEARCH_TERM } from '../actions/search_actions';

const searchReducer = (state = "", action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEARCH_INPUT:
            if (action.input){
                return action.input;
            } else {
                return "";
            }
        case CLEAR_SEARCH_TERM: 
            return "";
        default:
            return state;
    }
};

export default searchReducer;