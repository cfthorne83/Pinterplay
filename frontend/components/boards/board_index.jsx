import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {

        let boards = this.props.boards.map(board => {
            return <Link to={`/boards/${board.id}`}><li key={`${board.id}`}>{board.title}</li></Link>
        })
        
        return (
            
                <ul className='board-index'>
                        {boards}
                </ul>  
    
        )
    }
}

export default BoardIndex;