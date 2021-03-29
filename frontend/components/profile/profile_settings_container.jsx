import { connect }  from "react-redux";

import ProfileSettings from "./profile_settings";

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    return {

    }
}

export default connect(msp, mdp)(ProfileSettings);