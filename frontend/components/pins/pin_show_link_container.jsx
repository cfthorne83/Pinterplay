import { connect } from "react-redux";

import PinShowLink from "./pin_show_link";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        pinId: state.ui.modal.options
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(PinShowLink);