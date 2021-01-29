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
                        
                        <li id='initial'><Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.email[0].toUpperCase()}</Link></li>
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