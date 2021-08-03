import React from 'react';

import SplashNavBar from './splash_nav_bar'
import HomeNavBar from './home_nav_bar'

const NavBar = (props) => {

    if (props.currentUser) {
        return <HomeNavBar 
                    followLink={props.followLink}
                    homeLink={props.homeLink}
                    updateUrl={props.updateUrl}
                    url={props.url}
                    openModal={props.openModal}
                    logout={props.logout}
                    currentUser={props.currentUser}
                />
    } else {
        return <SplashNavBar
                    openModal={props.openModal}
                    logout={props.logout}
                    currentUser={props.currentUser}
                />
    }
}

export default NavBar;