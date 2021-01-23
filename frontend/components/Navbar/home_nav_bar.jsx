import React from 'react';

import LogoutDropdown from './logout_drop_down';
import NavLinks from './nav_links'

class HomeNavBar extends React.Component {

    render() {
        // return <NavLinks
        //     openModal={this.props.openModal}
        //     logout={this.props.logout}
        //     currentUser={this.props.currentUser}
        // />
        return <LogoutDropdown
            openModal={this.props.openModal}
            logout={this.props.logout}
            currentUser={this.props.currentUser}
        />
    }
}

export default HomeNavBar;