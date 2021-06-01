import { connect } from "react-redux";

import CopyPinDropdown from "./copy_pin_dropdown";
import { fetchBoards } from '../../actions/board_actions'; 

const msp = (state, ownProps) => {
    return {
        pin: ownProps.pin
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(msp, mdp)(CopyPinDropdown);