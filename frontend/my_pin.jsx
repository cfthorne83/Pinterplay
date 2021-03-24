import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import Root from './components/root';
// import {fetchBoards, createBoard} from './actions/board_actions'
import {fetchBoards, createBoard, deleteBoard} from './util/board_api_util';
import { fetchPins, createPin } from './util/pin_api_util';



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
    window.createBoard = createBoard;
    window.deleteBoard = deleteBoard;

    window.fetchPins = fetchPins;
    window.createPin = createPin;


    ReactDOM.render(<Root store={store}/>, root)
});