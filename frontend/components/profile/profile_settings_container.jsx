import { connect }  from "react-redux";

import ProfileSettings from "./profile_settings";

import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        openModal: (modal, options) => dispatch(openModal(modal, options))
    }
}

export default connect(msp, mdp)(ProfileSettings);