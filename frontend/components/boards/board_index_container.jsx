import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';
import { fetchPins } from "../../util/pin_api_util";


const msp = (state, ownProps) => {
    return { 
        boards: Object.values(state.entities.boards),
        currentUser: state.entities.users[state.session.id]
        // board: ownProps.board,
        // pins: Object.values(state.entities.pins),
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        // deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        // // fetchPins: (board) => dispatch(fetchPins(board))
        // fetchPins: (board) => dispatch(fetchPins(board))
    }
}

export default connect(msp, mdp)(BoardIndex);