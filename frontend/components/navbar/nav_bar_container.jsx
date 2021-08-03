import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { updateUrl } from '../../actions/url_action';
import NavBar from './nav_bar'

const mSTP = (state, ownProps) => {
    debugger
        // let url = state.ui.url;
        let url = window.location.href.split("/").pop();
        let homeLink;
        let followLink;
        if ( url === "following"){
            // debugger
            followLink = "active";
            homeLink = "inactive";
        } else if ( url === "") {
            // debugger
            followLink = "inactive";
            homeLink = "active";
        } else {
            // debugger
            followLink = "none";
            homeLink = "none";
        }
    return {
        currentUser: state.entities.users[state.session.id],
        homeLink: homeLink,
        followLink: followLink,
        // url: state.ui.url
        url: window.location.href.split("/").pop()
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        updateUrl: url => dispatch(updateUrl(url))
    };
};

export default connect(mSTP, mDTP)(NavBar);