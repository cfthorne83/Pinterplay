import React from 'react';

import BoardIndexItemContainer from "./board_index_item_container";

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {

        const {fetchPins} = this.props;

        let boards = this.props.boards.map(board => {
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