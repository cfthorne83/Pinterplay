import { connect } from "react-redux";

import Followers from "./followers_index";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    debugger
    return {
        // followers: state.ui.modal.options
        // followers: state.entities.users[state.sesssion.id].followers
        followers: Object.values(state.entities.follows.followers),
        following: Object.values(state.entities.follows.following)
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Followers);