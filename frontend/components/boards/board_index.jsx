import React from 'react';
import {Link} from 'react-router-dom'

import BoardIndexItemContainer from "./board_index_item_container";
import BoardIndexItem from "./board_index_items";
import UserPinIndexLink from "../pins/user_pin_index_link";

class BoardIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = { first: true }

        this.handleFirst = this.handleFirst.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }
    
    handleFirst() {
        this.setState({ first: false });
    }

    render() {  
        
        if (this.props.boards.length === 0) return null;

        let reRender = false;
        this.props.boards.forEach( board => {
            if (!board.pins){
                reRender = true;
            }
        });
        
        if (reRender) return null;
        
        let boards = this.props.boards.map( (board, i) => {
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
                    first={first}
                    userId={this.props.currentUser.id} />
            );
        })
        
        return (
                <ul className='board-index'>
                        {/* <Link className="user-pin-index" to={`/users/${this.props.currentUser.id}/pins`}>
                            <li>
                                <div className="outer">
                                </div>
                                <h1>All Pins</h1>
                            </li>
                        </Link> */}
                        <UserPinIndexLink />
                    {boards}
                </ul>  
        );
    }
}

export default BoardIndex;