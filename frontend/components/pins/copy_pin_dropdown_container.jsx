import { connect } from "react-redux";

import CopyPinDropdown from "./copy_pin_dropdown";
import { fetchBoards } from '../../actions/board_actions'; 
import { createPin } from "../../actions/pin_actions";

const msp = (state, ownProps) => {
    return {
        pin: ownProps.pin,
        boards: Object.values(state.entities.boards),
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        createPin: (pin) => dispatch(createPin(pin))
    }
}

export default connect(msp, mdp)(CopyPinDropdown);