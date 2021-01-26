import React from 'react';
import { connect } from 'react-redux';

import BoardForm from './board_form';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditBoardForm extends React.Component {

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.postId);
    }

    render() {

        if (!board) return null;
        return (
            <BoardForm
                action={this.propsaction}
                formType={this.propsformType}
                post={this.propspost} />
        );
    }
}

const msp = (state, ownProps) => {
    return {
        board: state.entities.boards[ownProps.match.params.postId],
        formType: 'Update Board'
    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        action: (board) => dispatch(updateBoard(board))
    }
}

export default connect(msp, mdp)(EditBoardForm);