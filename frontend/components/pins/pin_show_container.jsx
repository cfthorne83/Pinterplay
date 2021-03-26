import { connect } from "react-redux";

import PinShow from "./pin_show";
import { fetchPin } from "../../actions/pin_actions";

const msp = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.param.match.pinId]
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchPin: (PinId) => dispatch(fetchPin(PinId))
    }
}

export default connect(msp, mdp)(PinShow);