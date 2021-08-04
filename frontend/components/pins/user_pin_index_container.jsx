import { connect } from "react-redux";

import UserPinIndex from "./user_pin_index";

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id] 
    }
}

export default connect(msp)(UserPinIndex);