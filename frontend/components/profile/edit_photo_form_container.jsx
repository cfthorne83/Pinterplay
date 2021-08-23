import { connect } from "react-redux";

import EditPhotoForm from "./edit_photo_form";

import { updateUser } from "../../actions/user_actions";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(EditPhotoForm);