import { connect } from "react-redux";

import CreatePinForm from "./create_pin_form";
import { createPin } from '../../actions/pin_actions';

const msp = (state, ownProps) => {
    return {
        pin: { title: "", image_url: "", description: "", board_id: "" }
    }
}

const mdp = (state, ownProps) => {
    return {
        createPin: (pin) => dispatch(createPin(pin))
    }
}   

export default connect(msp, mdp)(CreatePinForm);