import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import searchReducer from './search_reducer';
import urlReducer from './url_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    search: searchReducer,
    url: urlReducer
});

export default uiReducer;