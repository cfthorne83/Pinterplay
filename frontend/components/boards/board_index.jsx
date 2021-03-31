import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {

        let boards = this.props.boards.map(board => {
            return (
                <li key={board.id}>
                    <Link key={`${board.id}`} to={`/boards/${board.id}`}>
                        <div className="outer">
                            <div className="one"></div>
                            <div className="inner">
                                <div className="two"></div>
                                <div className="three"></div>
                            </div>
                        </div>
                        <h1>{board.title}</h1>
                    </Link>
                </li>
            )
        
        })
        
        return (
            
            <div className="board-index-con">
                <ul className='board-index'>
                        {boards}
                </ul>  
            </div>
    
        )
    }
}

export default BoardIndex;