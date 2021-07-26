import React from 'react';

class SplashNavBar extends React.Component {

    render() {
        return (

            
            <section className='splash-nav-bar'>
                <ul className='header-logo'>
                    <li><img className='logo' src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" alt="myPin Logo" /></li>
                    <li className='app-name'>Pinterplay</li>
                </ul>

        
                <ul className='nav-links'>
                    <button className='login' onClick={() => this.props.openModal('login')}>Log in</button>
                    <button className='signup' onClick={() => this.props.openModal('signup')}>Sign up</button>
                </ul>    
            </section>

        );
    }
}

export default SplashNavBar;