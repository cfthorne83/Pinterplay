import React from 'react';
import { Redirect } from 'react-router-dom';

import PinIndex from '../pins/pin_index_container'

class Following extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.currentUser.following;
        this.header = this.header.bind(this);
    }

    header() {
        if (this.props.currentUser.following[0]){
            return <h1 className="follow-header">From people you follow</h1>    
        } else {
            return <h1 className="follow-header">You are not following anyone yet.</h1>
        }
    }

    render(){
debugger
        if (!this.props.currentUser) {
            return <Redirect to='/' />
        }

        return (
            <div>
                {this.header()}
                <PinIndex following={true}/>
            </div>
        )
    }
}

export default Following;