import React from 'react';
import MainSplash from './main_splash';
import MainHome from './main_home_page';

const Main = (props) => {

    if (props.currentUser) {
        return <MainHome/>
        // https://i.pinimg.com/564x/d9/81/0e/d9810e8c65bb1607650eb802ece0d503.jpg
    } else {
        return <MainSplash
            currentUser={props.currentUser}
        />     
    }
}

export default Main;