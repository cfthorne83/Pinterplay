import React, {useState, useEffect} from "react";
import { AuthRoute } from '../util/route_util'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBarContainer from './navbar/nav_bar_container';
import MainContainer from "./main/main_container";

import ProfileSettingsContainer from "./profile/profile_settings_container";
import ProfileContainer from "./profile/profile_container";

import BoardShowContainer from './boards/board_show_container';

import CreatePinFormContainer from "./pins/create_pin_form_container";
import PinShowContainer from "./pins/pin_show_container";

const App = () => (
    // const [loading, setLoading] = useState(false);
    <div className="app">
        <header>
            <NavBarContainer />
        </header>
        <Modal />

        <Switch >
            <Route exact path="/pins/:pinId" component={PinShowContainer} />
            <Route exact path="/pin-builder" component={CreatePinFormContainer} />

            <Route exact path="/boards/:boardId" component={BoardShowContainer} />

            <Route exact path="/users/:userId" component={ProfileContainer} />
            <Route exact path="/users/:userId/settings" component={ProfileSettingsContainer}/>

            <Route path="/" component={MainContainer} />
        </Switch>
    </div>
);

export default App;