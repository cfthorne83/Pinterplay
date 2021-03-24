import { connect } from "react-redux";

import AddPinForm from "./create_pin_form";
import { createPin } from '../../actions/pin_actions';

const msp = (state, ownProps) => {
    return {
        pin: { title: "", image_url: "" }
    }
}

const mdp = (state, ownProps) => {
    return {
        createPin: (pin) => dispatch(createPin(pin))
    }
}   

export default connect(msp, mdp)(AddPinForm);