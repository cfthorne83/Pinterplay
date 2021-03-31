import React from 'react';

import BoardIndexItem from "./board_index_items";

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {

        let boards = this.props.boards.map(board => {
            return (
                <BoardIndexItem
                    board={board}
                    key={board.id}/>
            )
        })
        
        return (
            
                <ul className='board-index'>
                    {boards}
                </ul>  
        )
    }
}

export default BoardIndex;