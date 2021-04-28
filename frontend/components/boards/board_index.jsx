import React from 'react';

import BoardIndexItemContainer from "./board_index_item_container";
import BoardIndexItem from "./board_index_items";

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }
    
    componentDidUpdate() {
        this.props.fetchBoards();
        adfjkslhkjahsdf
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
        
        let boards = this.props.boards.map(board => {
            return (
                <BoardIndexItem
                    board={board}
                    key={board.id}/>
            );
        })
        
        return (
                <ul className='board-index'>
                    {boards}
                </ul>  
        );
    }
}

export default BoardIndex;