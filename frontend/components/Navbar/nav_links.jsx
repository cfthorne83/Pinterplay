import React from 'react';
import { Link } from 'react-router-dom';





const NavLinks = (props) => {

    const loginSignup = () => (
        <ul className='nav-links'>
            <button className='login' onClick={() => props.openModal('login')}>Log in</button>
            <button className='signup' onClick={() => props.openModal('signup')}>Sign up</button>
        </ul>
        
    );

    const logout = () => (
        <div >
            <button onClick={props.logout}>Log Out</button>
        </div>
    );

        if (props.currentUser !== undefined){
            return logout();
        } else {
            return loginSignup();
        }
};


export default NavLinks;