import React, {useState, useEffect} from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
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
import UserPinIndex from "./pins/user_pin_index"

import FollowingContainer from "./following/following_container";

const App = () => (
    
    <div className="app">
        <header>
            <NavBarContainer />
        </header>
        <Modal />

        <Switch >
            {/* <Route exact path="/pins/:pinId" component={PinShowContainer} /> */}
            <Route path="/pins/:pinId" component={PinShowContainer} />
            {/* <Route exact path="/pin-builder" component={CreatePinFormContainer} /> */}
            <ProtectedRoute exact path="/pin-builder" component={CreatePinFormContainer} />

            <ProtectedRoute path="/users/:userId/pins" component={UserPinIndex}/>
            {/* <Route exact path="/boards/:boardId" component={BoardShowContainer} /> */}
            <ProtectedRoute path="/boards/:boardId" component={BoardShowContainer} />

            {/* <Route exact path="/users/:userId" component={ProfileContainer} /> */}
            <ProtectedRoute exact path="/users/:userId/settings" component={ProfileSettingsContainer}/>
            <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
            {/* <Route path="/users/:userId/settings" component={ProfileSettingsContainer}/> */}
            
            {/* <Route exact path="/following" component={FollowingContainer}/> */}
            <ProtectedRoute path="/following" component={FollowingContainer}/>

            {/* <Route path="/users/:userId/pins" component={UserPinIndex}/> */}

            <Route exact path="/" component={MainContainer} />
        </Switch>
    </div>
);

export default App;