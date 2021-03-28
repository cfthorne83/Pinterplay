import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { fetchPins, deletePin } from '../../actions/pin_actions';

const msp = (state, ownProps) => {
    debugger
    return { 
        pins: Object.values(state.entities.pins),
        board: ownProps.board
    }
}

const mdp = (dispatch, ownProps) => {
    debugger
    return {
        fetchPins: (board) => dispatch(fetchPins(board)),
        deletePin: (pinId) => dispatch(deletePin(pinId))
    }
}

export default connect(msp, mdp)(PinIndex);