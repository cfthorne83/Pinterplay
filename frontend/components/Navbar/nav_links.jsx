import React from 'react';

import LogoutDropdown from './logout_drop_down'

const NavLinks = (props) => {

    return  (
        <ul className='nav-links'>
            <button className='login' onClick={() => props.openModal('login')}>Log in</button>
            <button className='signup' onClick={() => props.openModal('signup')}>Sign up</button>
        </ul>
        
    );

    // const loginSignup = () => (
    //     <ul className='nav-links'>
    //         <button className='login' onClick={() => props.openModal('login')}>Log in</button>
    //         <button className='signup' onClick={() => props.openModal('signup')}>Sign up</button>
    //     </ul>
        
    // );

    //     if (props.currentUser !== undefined){
    //         return <LogoutDropdown logout={props.logout}/>
    //     } else {
    //         return loginSignup();
    //     }
};


export default NavLinks;