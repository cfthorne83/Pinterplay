import { connect } from "react-redux";

import PinShow from "./pin_show";
import { fetchPin } from "../../actions/pin_actions";
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from "../../actions/modal_actions";
import { createFollow, deleteFollow } from "../../actions/follow_actions";

const msp = (state, ownProps) => {
    const pin = state.entities.pins[ownProps.match.params.pinId]
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        newPin: { board_id: "" },
        shuffle: ownProps.shuffle,
        currentUser: state.entities.users[state.session.id], 
        following: state.entities.users[state.session.id].following,
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        openModal: (modal, options) => {dispatch(openModal(modal, options))},
    }
}

export default connect(msp, mdp)(PinShow);
export default connect(msp, mdp)(PinShow);