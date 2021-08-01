import React from 'react';
import { Redirect } from 'react-router-dom';

import PinIndex from '../pins/pin_index_container'

class Following extends React.Component{
    constructor(props){
        super(props);

        this.state = { following: this.props.currentUser.following, fetched: false };
        this.header = this.header.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id).then(
            this.setState({ fetched: true })
        )
    }

    header() {
        if (this.props.currentUser.following[0]){
            return <h1 className="follow-header">From people you follow</h1>    
        } else {
            return <h1 className="follow-header">You are not following anyone yet.</h1>
        }
    }

    render(){
        if (!this.props.currentUser) {
            return <Redirect to='/' />
        } else if (this.state.fetched === false) {
            return null;
        }
debugger
        return (
            <div>
                {this.header()}
                <PinIndex currentUser={this.props.currentUser} following={true}/>
            </div>
        )
    }
}

export default Following;