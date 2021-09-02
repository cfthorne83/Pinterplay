import { connect } from "react-redux";

import CreatePinDropdown from "./create_pin_dropdown";
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        boards: Object.values(state.entities.boards)
    }
}

const mdp = (state, ownProps) => {
    return {
        closeModal: (modal) => dispatch(closeModal(modal)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(CreatePinDropdown);