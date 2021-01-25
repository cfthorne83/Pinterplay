import React from 'react';
import { Link } from 'react-router-dom';

import LogoutDropdown from './logout_drop_down';

class HomeNavBar extends React.Component {

    render() {

        return (
            <header className='home-nav-bar'>

                <nav className='nav-link-container'>
                    <img className='home-logo' src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" alt="myPin Logo" />
                    <ul className='nav-links'>
                        <li><Link to='/'>Home</Link></li>
                        <li>Today</li>
                        <li><Link to=''>Following</Link></li>
                    </ul>
                </nav>

                <form className='searchbar-container'>
                    <input  className='searchbar' 
                            type="text" 
                            placeholder="Search" />
                </form>

                <nav className='nav-dropdowns-container'>
                    <ul className='nav-dropdowns'>
                        <li><img className='update-bell' src="https://www.flaticon.com/svg/vstatic/svg/1827/1827347.svg?token=exp=1611428875~hmac=a2ec2aa117173d2d676fb56775dabbb9" alt="update bell" /></li>
                        <li><img className='inbox-link' src="https://www.flaticon.com/svg/vstatic/svg/684/684849.svg?token=exp=1611428751~hmac=8da5ce304e20dd595c1c7beaea8b919e" alt="inbox link" /></li>
                        <li id='initial'><Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.email[0]}</Link></li>
                        <li>
                            <LogoutDropdown
                            logout={this.props.logout}
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HomeNavBar;