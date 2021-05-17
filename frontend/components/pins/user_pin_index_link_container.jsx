import { connect } from 'react-redux';

import UserPinIndexLink from './user_pin_index_link';

import { fetchPins, fetchPin } from "../../actions/pin_actions";

const msp = (state, ownProps) => {
    return { 
        userId: ownProps.userId
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPins: (board) => dispatch(fetchPins(board)),
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}

export default connect(msp, mdp)(UserPinIndexLink);