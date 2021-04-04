import React from 'react';
import { Redirect } from 'react-router-dom';

import CreatePinDropdownContainer from "../pins/create_pin_dropdown_container";
import PinIndexContainer from "../pins/pin_index_container";


class BoardShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {
        
        if (!this.props.board){
            return null;
        } else if (!this.props.currentUser) {
            return <Redirect to='/' />
        };

            return (
                <div className='board-show'>

                    <div className="header"> 
                        <h1>{this.props.board.title}</h1>
                        <img 
                            onClick={()  => {this.props.openModal('editBoard', this.props.board.id)}} 
                            src="https://static.thenounproject.com/png/384290-200.png" 
                            alt="edit-form-link"
                            className='edit-form-link'/>
                    </div>
                        <PinIndexContainer board={this.props.board} />
                        <CreatePinDropdownContainer />
                    </div>
        );

    }
}

export default BoardShow; 