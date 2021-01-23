import React from 'react';

import LogoutDropdown from './logout_drop_down';

class HomeNavBar extends React.Component {

    render() {

        return (
            <div>
                <ul className='home-nav-bar'>
                    <li><img className='logo' src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" alt="myPin Logo" /></li>
                    <li>Home</li>
                    <li>Today</li>
                    <li>Following</li>
                    <li className='searchbar'><input type="text" /></li>
                    <li>
                        <img className='update-bell' src="https://www.flaticon.com/svg/vstatic/svg/1827/1827347.svg?token=exp=1611428875~hmac=a2ec2aa117173d2d676fb56775dabbb9" alt="update bell"/>
                    </li>
                    <li>
                        <img className='update-bell' src="https://www.flaticon.com/svg/vstatic/svg/684/684849.svg?token=exp=1611428751~hmac=8da5ce304e20dd595c1c7beaea8b919e" alt="update bell"/>
                    </li>
                    <li>
                        <LogoutDropdown
                        logout={this.props.logout}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeNavBar;