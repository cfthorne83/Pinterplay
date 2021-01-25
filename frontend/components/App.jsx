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

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        <Switch >
            <Route exact path="/users/:userId" component={ProfileContainer} />
            <Route exact path="/" component={MainContainer} />
        </Switch>
    </div>
);

export default App;