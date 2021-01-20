import React from 'react';
import { Link } from 'react-router-dom';





const Greeting = (props) => {

    const links = () => (
        <div >
            <button onClick={() => props.openModal('login')}>Login</button>
            <button onClick={() => props.openModal('signup')}>Signup</button>
        </div>
    );

    const greeting = () => (
        <div >
            <button onClick={props.logout}>Log Out</button>
        </div>
    );


    if (props.currentUser !== undefined){
        return greeting();
    } else {
        return links();
    }
};


export default Greeting;