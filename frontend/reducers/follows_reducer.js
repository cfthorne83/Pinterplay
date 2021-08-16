import {
    RECEIVE_ALL_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW,
} from '../actions/follow_actions';

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOW:
            // return action.follow;
            let newStateTwo = Object.assign({},state.following);
            newStateTwo = Object.assign({}, newStateTwo, { [action.follow.id]: action.follow });
            return {followers: state.followers, following: newStateTwo}
        case REMOVE_FOLLOW:
            let newState = Object.assign({}, state.following);
            delete newState[action.followId];
            // return newState;
            return {followers: state.followers, following: newState}
        default:
            return state;
    }
}

export default followsReducer;