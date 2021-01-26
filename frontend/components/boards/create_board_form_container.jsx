import { connect } from 'react-redux';

import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
    return {
        board: { title: "", description: "" },
        formType: 'Create Board'
    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        action: (board) => dispatch(createBoard(board))
    }
}

export default connect(msp, mdp)(BoardForm);