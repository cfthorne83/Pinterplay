import { connect } from "react-redux";

import AddPinDropdown from "./add_pin_dropdown";
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {

    }
}

const mdp = (state, ownProps) => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}
