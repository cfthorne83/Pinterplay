import React from 'react';
import NavLinks from './nav_links'

class NavBar extends React.Component{

    render(){
        return (
            
            <div className='header'>
                <ul className='header-logo'>
                    <li><img className='logo' src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" alt="myPin Logo" /></li>
                    <li className='app-name'>myPin</li>
                </ul>

                <nav className='header-nav-lists'>
                        <ul className='mid-links'>
                            <li>About</li>
                            <li>Business</li>
                            <li>Blog</li>
                        </ul>
                        <NavLinks 
                            openModal={this.props.openModal} 
                            logout={this.props.logout}
                            currentUser={this.props.currentUser}
                            />
                </nav>
            </div>
            
        );
    }
}

export default NavBar;