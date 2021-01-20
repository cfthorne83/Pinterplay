import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form'
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to='/login'>Log In</Link>
    }
}

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm);