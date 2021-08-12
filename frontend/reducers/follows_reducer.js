import {
    RECEIVE_ALL_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW,
} from '../actions/follow_actions';

const followsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOW:
            return Object.assign({}, state, { [action.follow.id]: action.follow });
            // return Object.assign({}, state, action.follow );
        case REMOVE_FOLLOW:
            let newState = Object.assign({}, state);
            delete newState[action.followId];
            return newState;
        default:
            return state;
    }
}

export default followsReducer;