import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { fetchPins, deletePin } from '../../actions/pin_actions';

const msp = (state, ownProps) => {
    return { 
        pins: Object.values(state.entities.pins),
        board: ownProps.board,
        following: ownProps.following,
        currentUser: state.entities.users[state.session.id],
        userPinIndex: ownProps.userPinIndex,
        searchInput: state.ui.search
    }
}

const mdp = (dispatch, ownProps) => {
        
    return {
        fetchPins: (board) => dispatch(fetchPins(board)),
        deletePin: (pinId) => dispatch(deletePin(pinId))
    }
}

export default connect(msp, mdp)(PinIndex);
export default connect(msp, mdp)(PinIndex);