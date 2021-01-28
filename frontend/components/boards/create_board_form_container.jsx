import { connect } from 'react-redux';

import CreateBoardForm from './create_board_form';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
    return {
        board: { title: "", description: "" }
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        createBoard: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(CreateBoardForm);