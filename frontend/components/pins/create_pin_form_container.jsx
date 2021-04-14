import { connect } from "react-redux";

import CreatePinForm from "./create_pin_form";
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

const msp = (state, ownProps) => {
    return {
        pin: { title: "", image_url: "", description: "", board_id: ""},
        boards: Object.values(state.entities.boards),
        loading: state.entities.loading
    }
}

const mdp = (state, ownProps) => {
    return {
        createPin: (formData) => dispatch(createPin(formData)),
        fetchBoards: () => dispatch(fetchBoards())
    }
}   

export default connect(msp, mdp)(CreatePinForm);