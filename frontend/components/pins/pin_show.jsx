import React from "react";
import BoardDropdown from "../boards/board_dropdown";
import { Redirect } from 'react-router-dom';

class PinShow extends React.Component {
    constructor(props){
        super(props);
        // this.state = Object.assign(this.props.pin, { mounted: false });
        this.state = { pin: null, mounted: false, following: null };

        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleCreatePin = this.handleCreatePin.bind(this);
        this.userDisplay = this.userDisplay.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.displayFollow = this.displayFollow.bind(this);
        this.handleState = this.handleState.bind(this);
        this.followBtn = this.followBtn.bind(this);
    }

    componentWillMount() {
        // if (this.props.pins.length === 0) {
        //     this.props.fetchPins();
        // }
        this.props.fetchPin(this.props.match.params.pinId);
    }
    
    componentDidMount() {
        // if (this.props.pins.length === 0){
        //     this.props.fetchPins();
        // }
        this.props.fetchBoards();
        this.setState({ mounted: true });
        // (this.setState({pin: this.props.pin}))
    }

    handleGoBack() {
        history.back();
    }

    handleCreatePin(e) {

        let board = document.querySelector(".selected-board");        
        this.setState({ 
                        board_id: board.dataset.id, 
                        title: this.props.pin.title,
                        image_url: this.props.pin.image_url
                    }, () => {
                        this.props.createPin(this.state); 
                    });                
    }

    userDisplay() {
        if (this.props.pin && this.props.pin.user && this.props.pin.user.fname && this.props.pin.user.lname){
            return (
                <h2>{this.props.pin.user.fname}&nbsp;{this.props.pin.user.lname}</h2>
            )
        } else if (this.props.pin && this.props.pin.user && this.props.pin.user.username){
            return (
                <h2>{this.props.pin.user.username}</h2>
            )
        } else if (this.props.pin && this.props.pin.user) {
            return (
                <h2>{this.props.pin.user.email}</h2>
            )
        }
    }

    handleFollow() {
        // $.ajax ({
        //             url: "/api/friendships",
        //             method: "POST",
        //             data: {
        //                 follower_id: this.props.currentUser.id,
        //                 followed_id: this.props.pin.user.id
        //             }
        //         })
        this.props.createFollow(this.props.currentUser.id, this.props.pin.user.id);
    }

    handleUnfollow() {
        $.ajax ({
                    url: "/api/friendships",
                    method: "DELETE",
                    data: {
                        follower_id: this.props.currentUser.id,
                        followed_id: this.props.pin.user.id
                    }
                })
    }

    displayFollow() {
        if (this.props.pin.followers.length === 1){
            return (
                <span>follower</span>
            )
        } else {
            return (
                <span>followers</span>
            )
        }
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

    render() {
        const {pin} = this.props;
        // if (this.state.mounted && !this.props.pin){
        //     return <Redirect to={`/users/${this.props.currentUser.id}`} />
        // } else 
        if (!this.props.pin) {
            return null;
        } else if (!this.props.pin.user) {
            return null;
        } else if (!this.props.pin.followers){
            return null;
        } else if (!this.state.pin) {
            this.handleState();
        }

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
                            <div 
                                className="pin-show__ellipsis"
                                onClick={()  => {this.props.openModal("editPin", this.props.pin.id)}} 
                                >
                                <img
                                    // className="pin-show__edit-modal"
                                    src="https://static.thenounproject.com/png/384290-200.png" 
                                    alt="edit-form-link"/>
                            </div>

                            <div className="pin-show__drop-inner">
                                <BoardDropdown boards={this.props.boards}/>
                                <button 
                                    className="pin-show__save"
                                    onClick={this.handleCreatePin}>
                                        Save
                                </button>
                            </div>
                        </div>

                        <h1 
                            className="pin-show__title">
                                {this.props.pin.title}
                        </h1>
                        <div className="pin-show__follow">
                            {this.userDisplay()}
                            {this.followBtn()}
                        </div>
                        <h3>{this.props.pin.followers.length}&nbsp;{this.displayFollow()}</h3>
                    </div>
                </div>

            </div>
        )
    }
}

export default PinShow;