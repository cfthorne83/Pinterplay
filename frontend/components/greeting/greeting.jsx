import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = (props) => {

    // const {currentUser, logout} = props;

    const sessionLinks = () => (
        <div >
            <Link to="/login">Login</Link>
            <p>or</p>
            <Link to="/signup">Sign up!</Link>
        </div>
    );

    const personalGreeting = () => (
        <div >
            <h1 >Hello, {props.currentUser.username}</h1>
            <button onClick={props.logout}>Log Out</button>
        </div>
    );

    return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;