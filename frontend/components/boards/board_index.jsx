import React from 'react';

import BoardIndexItemContainer from "./board_index_item_container";

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() { 

        if (this.props.boards.length === 0) return null;

        let boards = this.props.boards.map(board => {

            const pins = (board) => {
                return $.ajax({
                    url: '/api/pins',
                    method: 'GET',
                    data: {board}
                })
            }

            return (
                <BoardIndexItemContainer
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