import React from 'react';
import { Link } from 'react-router-dom';

// import BoardIndexItem from './board_index_item';
// import CreateBoardFormContainer from './create_board_form_container';

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {

        let boards = this.props.boards.map(board => {
            return <li key={`${board.id}`}><Link to={`/boards/${board.id}`}>{board.title}</Link></li>
        })
        // { `/boards/${props.board.id}` }
        return (
            <div>
                <ul>{boards}</ul>
                {/* < CreateBoardFormContainer /> */}
            </div>
        )
    }
}

export default BoardIndex;