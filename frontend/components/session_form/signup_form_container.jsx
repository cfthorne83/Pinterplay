import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form'
import { signup, login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to='/signup'>Already a member? Log in</Link>

    }
}

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);