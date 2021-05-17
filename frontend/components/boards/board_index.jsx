import React from 'react';
import {Link} from 'react-router-dom'

import BoardIndexItemContainer from "./board_index_item_container";
import BoardIndexItem from "./board_index_items";
import UserPinIndexLinkContainer from "../pins/user_pin_index_link_container";

class BoardIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = { first: true, boards: this.props.boards }

        this.handleFirst = this.handleFirst.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }
    
    componentDidUpdate() {
        debugger
        if (this.props.boards !== this.state.boards){
            this.setState({boards: this.props.boards})
            this.forceUpdate();
        } 
    }
    
    handleFirst() {
        this.setState({ first: false });
    }

    render() {  
        console.log(this.state.boards);
        
        if (this.props.boards.length === 0) return null;
        let reRender = false;
        this.props.boards.forEach( board => {
            if (!board.pins){
                reRender = true;
            }
        });
        
        // if (reRender) return null;
        
        let boards = this.state.boards.map( (board, i) => {
            let first;
            if (i !== 0 ){
                first = false;
            } else {
                first = true;
            }

            return (
                <BoardIndexItem
                    board={board}
                    key={board.id}
                    />
            );
        })
        
        return (
                <ul className='board-index'>
                    {/* <UserPinIndexLinkContainer userId={this.props.currentUser.id}/> */}
                    {boards}
                </ul>  
        );
    }
}

export default BoardIndex;