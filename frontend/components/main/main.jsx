import React from 'react';
import MainSplash from './main_splash';
import MainHome from './main_home_page';

const Main = (props) => {

    if (props.currentUser) {
        return <MainHome/>
    } else {
        return <MainSplash
            // currentUser={props.currentUser}
        />     
    }
}

export default Main;