import React from 'react';
import { Link } from 'react-router-dom';

import LogoutDropdown from './logout_drop_down';

class HomeNavBar extends React.Component {

    profileLink() {
        if (this.props.currentUser.image_url) {
            return (
                <li id='initial'>
                    <img src={this.props.currentUser.image_url} alt=""/>
                </li>
            )
        } else {
            return (
                <li id='initial'>
                    {this.props.currentUser.email[0].toUpperCase()}
                </li>
            )
        }
    }

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
                        <Link to={`/users/${this.props.currentUser.id}`}>
                            {this.profileLink()}
                        </Link>
                        <li>
                            <LogoutDropdown logout={this.props.logout} />
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HomeNavBar;