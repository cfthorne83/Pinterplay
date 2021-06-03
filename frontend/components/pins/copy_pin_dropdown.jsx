import React from "react";

import BoardDropdown from "../boards/board_dropdown";

class CopyPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = { pin_id: "", board_id: "" }

        this.handleCreatePin = this.handleCreatePin.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleCreatePin(e) {
        let board = document.querySelector(".selected-board");        
        this.setState({ 
                        board_id: board.dataset.id, 
                        pin_id: this.props.pin.id
                    }, () => {
                        // this.props.createPin(this.state); 
                        $.ajax({
                            url: "/api/board_pins",
                            method: "POST",
                            data: { board_pin: this.state}
                        })
                    });                
    }

    render() {
        return (
                <div className="pin-show__drop-inner">
                    <BoardDropdown boards={this.props.boards}/>
                    <button 
                        className="pin-show__save"
                        onClick={this.handleCreatePin}>
                            Save
                    </button>
                </div>
        )
    }
}

export default CopyPinDropdown;