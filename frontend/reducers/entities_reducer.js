import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import boardsReducer from './boards_reducer';
import pinsReducer from './pins_reducer';
import followsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    pins: pinsReducer, 
    follows: followsReducer
});

export default entitiesReducer;