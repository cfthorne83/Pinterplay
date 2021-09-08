import { connect } from "react-redux";

import CreatePinForm from "./create_pin_form";
import { createPin, fetchPins, fetchPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        pin: { title: "", image_url: "", description: "", board_id: ""},
        boards: Object.values(state.entities.boards),
        loading: state.entities.loading,
        currentUser: state.entities.users[state.session.id],
        searchTerm: state.ui.search
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        createPin: (formData) => dispatch(createPin(formData)),
        fetchBoards: () => dispatch(fetchBoards()), 
        openModal: (modal, options) => dispatch(openModal(modal, options)),
        fetchPins: (board) => dispatch(fetchPins(board)),
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}   

export default connect(msp, mdp)(CreatePinForm);