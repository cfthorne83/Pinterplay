import React from "react";

import BoardDropdown from "../boards/board_dropdown";

class CopyPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.pin;

    }

    componentDidMount() {
        this.props.fetchBoards();
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