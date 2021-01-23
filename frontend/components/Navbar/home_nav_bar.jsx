import React from 'react';

import LogoutDropdown from './logout_drop_down';

class HomeNavBar extends React.Component {

    render() {

        return <LogoutDropdown
            openModal={this.props.openModal}
            logout={this.props.logout}
            currentUser={this.props.currentUser}
        />
    }
}

export default HomeNavBar;