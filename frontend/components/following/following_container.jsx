import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};