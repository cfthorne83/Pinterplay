import React from "react";
import { Redirect } from 'react-router-dom';

import FollowBtnContainer from "../following/follow_btn_container";
import CopyPinDropdownContainer from "./copy_pin_dropdown_container";
import PinIndexContainer from "../pins/pin_index_container";
import PinIndex from "./pin_index";

class PinShow extends React.Component {
    constructor(props){
        super(props);
        // this.state = Object.assign(this.props.pin, { mounted: false });
        this.state = { pin: this.props.pin, fetched: false, following: this.props.following };

        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleFollowers = this.handleFollowers.bind(this);
    }
    
    componentDidMount() {
        
        if (this.props.searchTerm === ""){
            // debugger
            this.props.fetchPin(this.props.match.params.pinId);
        }
        this.props.updateUrl(this.props.url);
        this.setState({ fetched: true });
        // if (this.props.pins.length === 0){
            //     this.props.fetchPins();
            // }
            // (this.setState({pin: this.props.pin}))
        }
        
        componentDidUpdate(){
            if (this.props.searchTerm === ""){
                // debugger
                this.props.fetchPin(this.props.match.params.pinId);
            }
        
    }

    handleGoBack() {
        history.back();
    }

    handleState() {
        this.setState({ pin: this.props.pin });
    }

    followBtn() {
        const followIds = this.props.currentUser.following.map( follow => {
            return follow.id
        })
        if (this.props.pin.user && this.props.pin.user.id !== this.props.currentUser.id) {
            if (followIds.includes(this.props.pin.user.id)){
                return <button onClick={this.handleUnfollow}>Unfollow</button>
            } else {
                return <button onClick={this.handleFollow}>Follow</button>
            }
        }
    }

    handleFollowers() {
        this.setState({ followers: this.props.pin.followers.length })
    }

    editLink() {
        if (this.props.pin && (this.props.pin.user.id === this.props.currentUser.id)){
            return (
                <div 
                    className="pin-show__ellipsis"
                    onClick={()  => {this.props.openModal("editPin", this.props.pin.id)}} 
                    >
                    <img
                        // className="pin-show__edit-modal"
                        src="https://static.thenounproject.com/png/384290-200.png" 
                        alt="edit-form-link"/>
                </div>
            )
        }
    }

    render() {
        // debugger
        const {pin} = this.props;
        if(!pin){
            return null;
        }
        if (this.props.searchTerm === ""){

            if (!this.props.currentUser) {
                return <Redirect to='/' />
            } else if (!this.props.pin && !this.state.fetched) {
                return null;
            } else if ( !this.props.pin && this.state.fetched){
                return <div>Redirect</div>
            } 
            else if (!this.props.pin.user) {
                return null;
            } else if (!this.props.pin.followers){
                return null;
            } else if (!this.state.pin) {
                this.handleState();
            }  
        }

        if (this.props.searchTerm != ""){
            return (
                <PinIndexContainer shuffle={true}/> 
            )
        } else {
            // return <h1>gooobs!</h1>
            return (
                <div className="pin-show">
                    <button 
                        className="pin-show__back"
                        onClick={this.handleGoBack}>
                        <img 
                            className="pin-show__back-img"
                            src="/images/back-arrow2.png" 
                            alt="back-arrow"
                            />
                    </button>

                    <div className="pin-show__inner">
                        <img 
                            className="pin-show__img"
                            src={this.props.pin.image_url} 
                            alt="pin-image"/>

                        <div className="pin-show__text">

                            <div className="pin-show__drop">
                                {this.editLink()}
                                <CopyPinDropdownContainer pin=  {this.props.pin} />
                            </div>

                            <h1 className="pin-show__title">
                                    {this.props.pin.title}
                            </h1>
                            <FollowBtnContainer currentUser=    {this.props.currentUser} pin={this. props.pin} />

                        </div>
                    </div>

                </div>
        )
        }
        
    }
}

export default PinShow;