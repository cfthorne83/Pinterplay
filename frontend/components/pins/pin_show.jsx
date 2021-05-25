import React from "react";
import BoardDropdown from "../boards/board_dropdown";
import { Redirect } from 'react-router-dom';

class PinShow extends React.Component {
    constructor(props){
        super(props);

        // this.state = Object.assign(this.props.pin, { mounted: false });
        this.state = { pin: null, mounted: false };

        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleCreatePin = this.handleCreatePin.bind(this);
        this.userDisplay = this.userDisplay.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.displayFollow = this.displayFollow.bind(this);
    }

    // componentWillMount() {
    //     if (!this.props.pins) {
    //         this.props.fetchPins();
    //     }
    // }
    componentDidMount() {
        debugger
        if (this.props.pins.length === 0){
            debugger
            this.props.fetchPins();
        }
        this.props.fetchPin(this.props.match.params.pinId).then(this.setState({pin: this.props.pin}));
        this.props.fetchBoards();
        this.setState({ mounted: true })
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
        if (this.props.pin.user.username){
            return (
                <h2>{this.props.pin.user.username}</h2>
            )
        } else {
            return (
                <h2>{this.props.pin.user.email}</h2>
            )
        }
    }

    handleFollow() {
        $.ajax ({
                    url: "/api/friendships",
                    method: "POST",
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

    render() {
        const {pin} = this.props;
        // if (this.state.mounted && !this.props.pin){
        //     // return <Redirect to={`/users/${this.props.currentUser.id}`} />
        // } else 
        if (this.props.pins.length === 0) {
            debugger
            return null;
        } else if (!this.props.pin) {
            debugger
            return null;
        } else if (!this.props.pin.user) {
            return null;
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
                            <button onClick={this.handleFollow}>Follow</button>
                        </div>
                        <h2>{this.props.pin.followers.length}&nbsp;{this.displayFollow()}</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default PinShow;