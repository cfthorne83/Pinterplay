import React from 'react';
import { Link } from 'react-router-dom';

import LogoutDropdown from './logout_drop_down';

class HomeNavBar extends React.Component {

    profileLink() {
        if (this.props.currentUser.image_url) {
            return (
                <li className="prof-pic">
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
                    <ul className='nav-links'>
                        <Link to='/'>
                            <span>
                                <img className='home-logo' src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" alt="myPin Logo" />
                            </span>
                        </Link>                      
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to=''>Following</Link></li>
                    </ul>
                </nav>

                <form className='searchbar-container'>
                    <input  className='searchbar' 
                            type="text" 
                            placeholder="Search" />
                </form>

                <ul className="online-presence">
                        <a href="https://www.linkedin.com/in/chris-thorne83/" className="online-presence__filter" target="_blank">
                            <img  src="images/linkedin.png" alt="" />
                        </a>

                    <a href="https://github.com/cfthorne83/Pinterplay" className="online-presence__filter" target="_blank">
                        <img src="images/github.png" alt="" />
                    </a>
                    <a href="http://cfthorne83.github.io" target="_blank">
                        <img src="images/briefcase-thin-outline-symbol-in-a-circle-1.svg" alt="" />
                    </a>
                    <a href="mailto:cfthorne83@gmail.com" className="online-presence__email" target="_blank">
                        <img src="images/email.png" alt="" />
                    </a>
                </ul>

                <nav className='nav-dropdowns-container'>
                    <ul className='nav-dropdowns'>
                        <Link to={`/users/${this.props.currentUser.id}`}>
                            {this.profileLink()}
                        </Link>
                        
                        <LogoutDropdown logout={this.props.logout} />
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HomeNavBar;