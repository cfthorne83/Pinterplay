import React from "react";

import { AuthRoute } from '../util/route_util'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import NavBarContainer from './navbar/nav_bar_container';
import Modal from './modal/modal';
import MainContainer from "./main/main_container";
import ProfileContainer from "./profile/profile_container";
import BoardShowContainer from './boards/board_show_container';
import CreatePinFormContainer from "./pins/create_pin_form_container";
import PinShowContainer from "./pins/pin_show_container";

const App = () => (
    <div className="app">
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        <Switch >
            <Route exact path="/boards/pins/:pinIdpins/:pinId" component={PinShowContainer} />
            <Route exact path="/pin-builder" component={CreatePinFormContainer} />
            <Route exact path="/users/:userId" component={ProfileContainer} />
            <Route exact path="/boards/:boardId" component={BoardShowContainer} />
            <Route exact path="/" component={MainContainer} />
        </Switch>
    </div>
);

export default App;