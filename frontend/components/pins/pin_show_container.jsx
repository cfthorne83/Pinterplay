import { connect } from "react-redux";

import PinShow from "./pin_show";
import { fetchPin, fetchPins, createPin } from "../../actions/pin_actions";
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    
    return {
        // pins: Object.values(state.entities.pins),
        pin: state.entities.pins[ownProps.match.params.pinId],
        boards: Object.values(state.entities.boards),
        newPin: { board_id: "" },
        shuffle: ownProps.shuffle,
        currentUser: state.entities.users[state.session.id] 
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchPins: () => dispatch(fetchPins()),
        openModal: (modal, options) => {dispatch(openModal(modal, options))},
        fetchBoards: () => dispatch(fetchBoards()),
        createPin: (pin) => dispatch(createPin(pin))
    }
}

export default connect(msp, mdp)(PinShow);