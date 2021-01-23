import React from 'react';

class SplashNavBar extends React.Component {

    render() {
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
                 
                    <ul className='nav-links'>
                        <button className='login' onClick={() => this.props.openModal('login')}>Log in</button>
                        <button className='signup' onClick={() => this.props.openModal('signup')}>Sign up</button>
                    </ul>

                </nav>
            </div>

        );
    }
}

export default SplashNavBar;