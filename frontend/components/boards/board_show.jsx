import React from 'react';
import { Link } from "react-router-dom";


class BoardShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    componentDidUpdate(prevProps) {
            this.props.fetchBoard(this.props.match.params.boardId);
    }

    render() {
        // let pins = this.props.board.pins.map((pin, i) => {
            //     return <li>{pin.photo.attached}</li>
            // })
            
            return (
                <div>
                <p>{this.props.board.title}</p>
                <p>{this.props.board.description}</p>
                <img onClick={()  => {this.props.openModal('editBoard', this.props.board.id)}} src="https://static.thenounproject.com/png/384290-200.png" alt=""/>
            </div>
        );

    }
}

export default BoardShow; 