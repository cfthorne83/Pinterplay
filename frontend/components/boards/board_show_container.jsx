import { connect } from 'react-redux';

import BoardShow from './board_show';
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        board: state.entities.boards[ownProps.match.params.boardId]
    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: modal => dispatch(closeModal(modal)),
        updateBoard: (board) => dispatch(updateBoard(board)),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)) 
    }
}

export default connect(msp, mdp)(BoardShow);