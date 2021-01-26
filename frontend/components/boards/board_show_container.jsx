import { connect } from 'react-redux';

import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';

const msp = (state, ownProps) => {
    return {
        board: state.entities.boards[ownProps.match.params.boardId]
    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
    }
}

export default connect(msp, mdp)(BoardShow);