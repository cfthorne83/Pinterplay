import React from 'react';
import NavLinks from './nav_links'

class NavBar extends React.Component{

    render(){
        return (
            
            <div className='nav-container'>
                <div className='logo-container'>
                    <img className='logo' src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" alt="myPin Logo"/>
                    <span className='site-name'>myPin</span>
                </div>
                <div className='nav-link-container'>
                    <NavLinks 
                        openModal={this.props.openModal} 
                        logout={this.props.logout}
                        currentUser={this.props.currentUser}
                        />
                </div>
            </div>
            
        );
    }
}

export default NavBar;