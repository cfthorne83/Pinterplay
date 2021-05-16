import React from 'react';

import PinIndex from '../pins/pin_index_container'

class Following extends React.Component{

    render(){
        return (
            // <h1>Building your new following feed!</h1>
            <PinIndex following={true}/>
        )
    }
}

export default Following;