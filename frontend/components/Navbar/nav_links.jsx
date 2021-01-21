import React from 'react';
import { Link } from 'react-router-dom';





const NavLinks = (props) => {

    const loginSignup = () => (
        <div >
            <button onClick={() => props.openModal('login')}>Login</button>
            <button onClick={() => props.openModal('signup')}>Signup</button>
        </div>
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