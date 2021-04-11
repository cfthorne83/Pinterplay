import { connect } from "react-redux";

import CreatePinForm from "./create_pin_form";
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

const msp = (state, ownProps) => {
    return {
        pin: { title: "", photo: "", description: "", board_id: "" },
        boards: Object.values(state.entities.boards)
    }
}

const mdp = (state, ownProps) => {
    return {
        createPin: (pin) => dispatch(createPin(pin)),
        fetchBoards: () => dispatch(fetchBoards())
    }
}   

export default connect(msp, mdp)(CreatePinForm);