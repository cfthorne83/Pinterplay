import { connect } from "react-redux";

import PinShowLink from "./pin_show_link";

const msp = (state, ownProps) => {
    return {
        pinId: state.ui.modal.options
    }
}

const mdp = (dispatch, ownProps) => {
    return {
    }
}

export default connect(msp, mdp)(PinShowLink);