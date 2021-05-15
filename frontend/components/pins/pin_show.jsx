import React from "react";
import BoardDropdown from "../boards/board_dropdown";

class PinShow extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.pin;
        // {
        //                 image_url: this.props.pin.image_url, 
        //                 title: this.props.pin.title,
        //                 board_id: ""
        //             }

        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleCreatePin = this.handleCreatePin.bind(this);
        this.userDisplay = this.userDisplay.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
        this.props.fetchBoards();
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

    render() {

        const {pin} = this.props;
        
        if (!this.props.pin) {
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
                            <button>Follow</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PinShow;