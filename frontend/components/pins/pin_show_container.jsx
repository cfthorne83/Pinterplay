import { connect } from "react-redux";

import PinShow from "./pin_show";
import { fetchPin } from "../../actions/pin_actions";
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId]
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        openModal: (modal, options) => {dispatch(openModal(modal, options))}
    }
}

export default connect(msp, mdp)(PinShow);