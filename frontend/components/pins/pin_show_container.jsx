import { connect } from "react-redux";

import PinShow from "./pin_show";

const msp = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.param.match.pinId]
    }
}

const mdp = (dispatch, ownProps) => {
    return {

    }
}

export default connect(msp, mdp)(PinShow);