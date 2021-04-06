import { connect } from "react-redux";

import PinShow from "./pin_show";
import { fetchPin } from "../../actions/pin_actions";
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        boards: Object.values(state.entities.boards)
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        openModal: (modal, options) => {dispatch(openModal(modal, options))},
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(msp, mdp)(PinShow);