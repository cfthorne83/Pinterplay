import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';

const msp = (state, ownProps) => {
    return { 
        boards: Object.values(state.entities.boards)
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId))
    }
}

export default connect(msp, mdp)(BoardIndex);