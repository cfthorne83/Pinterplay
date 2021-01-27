import React from 'react';
import { connect } from 'react-redux';

import EditBoardForm from './edit_board_form';
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';



const msp = (state, ownProps) => {
// debugger
    return {
        board: state.entities.boards[state.ui.modal.options],
        boardId: state.ui.modal.options
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        updateBoard: (board) => dispatch(updateBoard(board)),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: (modal) => dispatch(closeModal(modal))            
    }
}

export default connect(msp, mdp)(EditBoardForm);