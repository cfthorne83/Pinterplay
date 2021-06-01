import React from "react";

import BoardDropdown from "../boards/board_dropdown";

class CopyPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.pin;

        this.handleCreatePin = this.handleCreatePin.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleCreatePin(e) {
        let board = document.querySelector(".selected-board");        
        this.setState({ 
                        board_id: board.dataset.id, 
                        title: this.props.pin.title,
                        image_url: this.props.pin.image_url
                    }, () => {
                        // this.props.createPin(this.state); 
                        // $.ajax({
                        //     url: "/api/pins",
                        //     method: "POST",
                        //     data: this.state
                        // })
                        console.log(this.state);
                        debugger
                    });                
    }

    render() {
        return (
            // <div>s;lkdfjl;k
                <div className="pin-show__drop-inner">
                    <BoardDropdown boards={this.props.boards}/>
                    <button 
                        className="pin-show__save"
                        onClick={this.handleCreatePin}>
                            Save
                    </button>
                </div>
            // </div>
        )
    }
}

export default CopyPinDropdown;