import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {

        let boards = this.props.boards.map(board => {
            return <Link key={`${board.id}`} to={`/boards/${board.id}`}><li>{board.title}</li></Link>
        })
        
        return (
            
                <ul className='board-index'>
                        {boards}
                </ul>  
    
        )
    }
}

export default BoardIndex;