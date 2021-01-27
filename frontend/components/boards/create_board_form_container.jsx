import { connect } from 'react-redux';

import CreateBoardForm from './create_board_form';
import { createBoard } from '../../actions/board_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
    return {
        board: { title: "", description: "" }
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        createBoard: (board) => dispatch(createBoard(board))
    }
}

export default connect(msp, mdp)(CreateBoardForm);