import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CreatePinDropdownContainer from "../pins/create_pin_dropdown_container";


class BoardShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    // componentDidUpdate(prevProps) {

    //     if (this.props.match.params.boardId !== prevProps.match.params.boardId){
    //         this.props.fetchBoard(this.props.match.params.boardId);
    //     }
    // }

    render() {
        
        if (!this.props.board){
            return null;
        } else if (!this.props.currentUser) {
            return <Redirect to='/' />
        };
        
        
        // let pins = this.props.board.pins;

        // const boardPins = Object.values(this.props.board).pins.map((pin, idx) => {
        //     return (
        //         <li>{pin.title}</li>
        //     )
        // })

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
                       
                        <CreatePinDropdownContainer/>
                </div>
        );

    }
}

export default BoardShow; 