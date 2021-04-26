import { connect } from 'react-redux';

import BoardIndexItem from './board_index_items';

import { fetchPins, fetchPin } from "../../actions/pin_actions";

const msp = (state, ownProps) => {
    return { 
        pins: Object.values(state.entities.pins),
        board: ownProps.board
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPins: (board) => dispatch(fetchPins(board)),
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}

export default connect(msp, mdp)(BoardIndexItem);