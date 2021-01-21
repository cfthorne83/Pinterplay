import React from "react";
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util'
import NavLinksContainer from './Navbar/nav_bar_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavLinksContainer />
        </header>
    </div>
);

export default App;