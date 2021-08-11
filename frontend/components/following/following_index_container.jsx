import { connect } from "react-redux";

import Following from "./following_index";

import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        following: state.ui.modal.options
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Following);