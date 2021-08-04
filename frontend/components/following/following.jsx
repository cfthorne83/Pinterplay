import React from 'react';
import { Redirect } from 'react-router-dom';

import PinIndex from '../pins/pin_index_container'

class Following extends React.Component{
    constructor(props){
        super(props);

        this.state = { following: this.props.currentUser.following, fetched: false, currentUser: this.props.currentUser };
        this.header = this.header.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchUser(this.state.currentUser.id).then(
            this.setState({ fetched: true, currentUser: this.props.currentUser })
        )
    }

    // async componentDidMount() {
    //     await this.props.fetchUser(this.state.currentUser.id);

    //     this.setState({ fetched: true, currentUser: this.props.currentUser });
    // }

    updateState() {
        this.setState({ following: this.props.currentUser.following,
                        currentUser: this.props.currentUser
            });
    }

    header() {
        // this.updateState();
        if (this.props.currentUser.following[0]){
            return <h1 className="follow-header">From people you follow</h1>    
        } else {
            // this.setState({ following: [],
            //                 currentUser: this.props.currentUser
            //     });
            return <h1 className="follow-header">You are not following anyone yet.</h1>
        }
    }

    render(){
        if (!this.props.currentUser) {
            return <Redirect to='/' />
        } 
        else if (this.state.fetched === false) {
            debugger
            return null;
        }
        debugger
        return (
            <div>
                {this.header()}
                <PinIndex currentUser={this.state.currentUser} following={true}/>
            </div>
        )
    }
}

export default Following;