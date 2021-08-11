import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreateBoardFormContainer from '../boards/create_board_form_container';
import EditBoardFormContainer from '../boards/edit_board_form_container';
import EditPinFormContainer from '../pins/edit_pin_form_container';
import EditPhotoFormContainer from '../profile/edit_photo_form_container';
import PinShowLinkContainer from '../pins/pin_show_link_container';
import  FollowersContainer from '../following/followers_index_container';
// import PinShowLinkContainer from '../pins/pin_show_link_container';

const closeScreen = () => {
    const screen = document.querySelector(".create-pin-form__screen");

    if (screen) {
        screen.style.display = "none";
    }

}

const Modal = ({ modal, closeModal, errors }) =>  {
    if (!modal) {
        return null;
    }

    let component;
    let modalClass;
    switch (modal.modal) {
        
        case 'login':
            component = <LoginFormContainer />;
            modalClass = "login-mod";
            break;
        case 'signup':
            component = <SignupFormContainer />;
            modalClass = "login-mod";
            break;
        case 'createBoard':
            component = <CreateBoardFormContainer />;
            modalClass = "create-board-mod"; 
            break;
        case 'editBoard':
            component = <EditBoardFormContainer />;
            modalClass = "edit-board-mod";
            break;
        case 'editPin':
            component = <EditPinFormContainer />;
            modalClass = "edit-pin-mod";
            break;
        case 'editPhoto':
            component = <EditPhotoFormContainer/>;
            modalClass = "edit-photo-mod";
            break;
        case 'pinShowLink':
            component = <PinShowLinkContainer/>;
            modalClass = "pin-show-link-mod";
            break;
        case 'followers':
            component = <FollowersContainer/>;
            modalClass = "Follower";
            break;
        case 'following':
            component = <FollowingContainer/>;
            modalClass = "pin-show-link-mod";
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className={`modal-child ${modalClass}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
