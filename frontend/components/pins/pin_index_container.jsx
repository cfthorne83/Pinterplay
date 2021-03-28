import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { fetchPins, deletePin } from '../../actions/pin_actions';

const msp = (state, ownProps) => {
    return { 
        pins: Object.values(state.entities.pins),
        board: ownProps.board
        // board: state.entities.boards[ownProps.match.params.boardId]
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPins: (board) => dispatch(fetchPins(board)),
        deletePin: (pinId) => dispatch(deletePin(pinId))
    }
}

export default connect(msp, mdp)(PinIndex);