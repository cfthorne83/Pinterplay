import { connect } from "react-redux";

import PinShowLink from "./pin_show_link";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    // debugger
    return {
        pinId: state.ui.modal.options.id, 
        board: state.ui.modal.options.board
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(PinShowLink);