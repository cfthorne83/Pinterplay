import React from 'react';
import { Link } from 'react-router-dom';

import LogoutDropdown from './logout_drop_down';
import SearchbarContainer from './searchbar_container';

class HomeNavBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { homeLink: "active", followLink: "inactive"};
        this.homeLink = this.homeLink.bind(this);
        this.followLink = this.followLink.bind(this);
        this.removeClass = this.removeClass.bind(this);
    }

    profileLink() {
        if (this.props.currentUser.image_url) {
            return (
                <li className="prof-pic">
                    <img src={this.props.currentUser.image_url} alt=""/>
                </li>
            )
        } else {
            return (
                <div className="initial-con">
                    <li id='initial'>
                        {this.props.currentUser.email[0].toUpperCase()}
                    </li>
                </div>
            )
        }
    }

    followLink() {
        this.setState({ homeLink: "inactive", followLink: "active"})
    }

    homeLink() {
        this.setState({ homeLink: "active", followLink: "inactive"})
    }

    removeClass() {
        this.setState({ homeLink: "none", followLink: "none"})
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
                        <li className={this.state.homeLink}><Link onClick={this.homeLink} to='/'>Home</Link></li>
                        <li className={this.state.followLink} ><Link onClick={this.followLink}to='/following'>Following</Link></li>
                    </ul>
                </nav>

                <SearchbarContainer />

                <ul className="online-presence">
                        <a href="https://www.linkedin.com/in/chris-thorne83/" className="online-presence__filter" target="_blank" title="my linkedin!">
                            <img  src="images/linkedin.png" alt="" />
                        </a>

                    <a href="https://github.com/cfthorne83/Pinterplay" className="online-presence__filter" target="_blank" title="my github!">
                        <img src="images/github.png" alt="" />
                    </a>
                    <a href="http://cfthorne83.github.io" target="_blank" title="my portfolio site!">
                        <img src="images/briefcase-thin-outline-symbol-in-a-circle-1.svg" alt="" />
                    </a>
                    <a href="mailto:cfthorne83@gmail.com" className="online-presence__email" target="_blank" title="email me!">
                        <img src="images/email.png" alt="" />
                    </a>
                </ul>

                <nav className='nav-dropdowns-container'>
                    <ul className='nav-dropdowns'>
                        <Link onClick={this.removeClass} to={`/users/${this.props.currentUser.id}`}>
                            {this.profileLink()}
                        </Link>
                        
                        <LogoutDropdown 
                            logout={this.props.logout}
                            currentUser={this.props.currentUser}
                        />
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HomeNavBar;