import React from 'react';
import MainSplash from './main_splash';

const Main = (props) => {

    if (props.currentUser) {
        return <h1>home page</h1>
        // https://i.pinimg.com/564x/d9/81/0e/d9810e8c65bb1607650eb802ece0d503.jpg
    } else {
        return <MainSplash
            currentUser={props.currentUser}
        />     
    }
}

export default Main;