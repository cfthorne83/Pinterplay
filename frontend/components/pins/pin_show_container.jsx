import { connect } from "react-redux";

import PinShow from "./pin_show";
import { fetchPin, createPin } from "../../actions/pin_actions";
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    debugger
    return {
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
        openModal: (modal, options) => {dispatch(openModal(modal, options))},
        fetchBoards: () => dispatch(fetchBoards()),
        createPin: (pin) => dispatch(createPin(pin))
    }
}

export default connect(msp, mdp)(PinShow);