import React from 'react';

import PinIndex from '../pins/pin_index_container'

class Following extends React.Component{

    render(){
        return (
            <div>
                <h1 className="follow-header">From people you follow</h1>
                <PinIndex following={true}/>
            </div>
        )
    }
}

export default Following;