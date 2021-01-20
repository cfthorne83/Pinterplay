import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form'
import { login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        navLink: <Link to='/signup'>Sign Up</Link>
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);