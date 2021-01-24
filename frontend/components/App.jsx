import React from "react";
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util'
import NavBarContainer from './Navbar/nav_bar_container';
import Modal from './modal/modal';
import MainContainer from "./main/main_container";

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        <body>
            <MainContainer/>
        </body>

    </div>
);

export default App;