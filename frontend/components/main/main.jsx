import React from 'react';
import MainSplash from './main_splash';

const Main = (props) => {

    if (props.currentUser) {
        return <h1>home page</h1>
    } else {
        return <MainSplash
            currentUser={props.currentUser}
        />     
    }
}

export default Main;