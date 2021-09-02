import React from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form'
import { signup, login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session, 
        formType: 'Sign up'
    }
}
const mdp = (dispatch, ownProps) => {
    const loginForm = (e) => {
        e.preventDefault();
        dispatch(clearErrors());
        dispatch(openModal('login'));
    }
    
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button className='other-form' 
                    // onClick={() => dispatch(openModal('login'))}>
                    onClick={loginForm}>
                Already a member? Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);