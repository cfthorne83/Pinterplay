import { connect } from "react-redux";

import EditPhotoForm from "./edit_photo_form";

import { updateUser } from "../../util/user.api.util";

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(msp, mdp)(EditPhotoForm);