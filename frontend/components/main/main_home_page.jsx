import React from 'react';
import PinIndexContainer from "../pins/pin_index_container";

class MainHome extends React.Component{

    render(){

        return (
            <PinIndexContainer shuffle={true}/>       
        );
    }
}

export default MainHome;