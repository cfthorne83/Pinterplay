import { connect }  from "react-redux";

import ProfileSettings from "./profile_settings";

import { openModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        openModal: (modal, options) => dispatch(openModal(modal, options)),
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(msp, mdp)(ProfileSettings);