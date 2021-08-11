import { connect } from "react-redux";

import Followers from "./followers_index";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        followers: state.ui.modal.options
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Followers);