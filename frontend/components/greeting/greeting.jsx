import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = (props) => {

    // const {currentUser, logout} = props;

    const links = () => (
        <div >
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
        </div>
    );

    const greeting = () => (
        <div >
            <h1 >Welcome {props.currentUser.username}</h1>
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