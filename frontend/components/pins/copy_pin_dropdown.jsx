import React from "react";
import { Link } from 'react-router-dom';

import BoardDropdown from "../boards/board_dropdown";

class CopyPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = { pin_id: "", board_id: "", saved: false }

        this.handleCreatePin = this.handleCreatePin.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleCreatePin(e) {
        let board = document.querySelector(".selected-board"); 
        const button = e.target; 
        const that = this;

        this.setState({ 
            board_id: board.dataset.id, 
            pin_id: this.props.pin.id
        }, () => {
            // this.props.createPin(this.state); 
            $.ajax({
                url: "/api/board_pins",
                method: "POST",
                data: { board_pin: this.state}
            }).then(
                (response) => {
                                button.style.backgroundColor = "black";    
                                button.innerText = "Saved";  
                                button.disabled = true;
                                that.setState({saved: true})  
                            }
                        )
                    });                
    }

    handleSave() {
        if (!this.state.saved){
            return <BoardDropdown boards={this.props.boards}/>
        } else {
            return <div>;laksjdf</div>
        }
    }

    render() {
        return (
                <div className="pin-show__drop-inner">
                    {this.handleSave()}
                    <button 
                        className="pin-show__save"
                        onClick={this.handleCreatePin}
                        // disabled
                        >
                            Save
                    </button>
                </div>
        )
    }
}

export default CopyPinDropdown;