import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {

        let boards = this.props.boards.map(board => {
            return <li key={`${board.id}`}><Link to={`/boards/${board.id}`}>{board.title}</Link></li>
        })
        
        return (
            
                <ul className='board-index'>
                        {boards}
                </ul>  
    
        )
    }
}

export default BoardIndex;