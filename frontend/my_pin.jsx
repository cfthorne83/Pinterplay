import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import Root from './components/root';
// import {fetchBoards, createBoard} from './actions/board_actions'
import {fetchBoards, fetchBoard, createBoard, deleteBoard} from './util/board_api_util';
import { fetchPins, fetchPin, createPin, deletePin } from './util/pin_api_util';

import { updateUser } from './util/user.api.util';



document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBoards = fetchBoards;
    window.fetchBoard = fetchBoard;
    window.createBoard = createBoard;
    window.deleteBoard = deleteBoard;

    window.fetchPins = fetchPins;
    window.createPin = createPin;
    window.fetchPin = fetchPin;
    window.deletePin = deletePin;

    window.updateUser = updateUser;


    ReactDOM.render(<Root store={store}/>, root)
});