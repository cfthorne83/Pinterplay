import { connect } from "react-redux";

import BoardDropdown from "./board_dropdown";

import { fetchBoards } from '../../actions/board_actions';

const msp = (state, ownProps) => {
    return {
        boards: Object.values(state.entities.boards)
    }
}

const mdp = (state, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(msp, mdp)(BoardDropdown);