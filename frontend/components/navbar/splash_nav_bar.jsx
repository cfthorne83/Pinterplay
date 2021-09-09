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
                    <a href="">LinkedIn</a>
                    <a href="">Github</a>
                    <a href="">Portfolio</a>
                    <a href="">Email</a>
                    {/* <ul className="online-presence">
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
                    </ul> */}
                    <button className='login' onClick={() => this.props.openModal('login')}>Log in</button>
                    <button className='signup' onClick={() => this.props.openModal('signup')}>Sign up</button>
                </ul>    
            </section>

        );
    }
}

export default SplashNavBar;