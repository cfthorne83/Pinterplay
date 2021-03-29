import { connect } from "react-redux";

import EditPhotoForm from "./edit_photo_form";

import { updateUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    debugger
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(msp, mdp)(EditPhotoForm);