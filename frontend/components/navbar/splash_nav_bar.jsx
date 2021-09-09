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
                    <div className="nav-links__online-pres">
                        <a href="https://www.linkedin.com/in/chris-thorne83/" target="_blank" title="my linkedin!">LinkedIn</a>
                        <a href="https://github.com/cfthorne83/Pinterplay" target="_blank" title="my github!">Github</a>
                        <a href="http://cfthorne83.github.io" target="_blank" title="my portfolio site!">Portfolio</a>
                        <a href="mailto:cfthorne83@gmail.com" target="_blank" title="email me!">Email</a>
                    </div>
                    <button className='login' onClick={() => this.props.openModal('login')}>Log in</button>
                    <button className='signup' onClick={() => this.props.openModal('signup')}>Sign up</button>
                </ul>    
            </section>

        );
    }
}

export default SplashNavBar;