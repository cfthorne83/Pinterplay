import { connect } from "react-redux";

import EditPinForm from "./edit_pin_form";

import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        pin: state.entities.pins[state.ui.modal.options],
        pinId: state.ui.modal.options
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        updatePin: (pin) => dispatch(updatePin(pin)),
        deletePin: (pinId) => dispatch(deletePin(pinId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(EditPinForm);