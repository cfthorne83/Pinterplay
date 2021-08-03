// import * as APIUtil from '../util/session_api_util';

// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

// export const receiveCurrentUser = currentUser => {
//     return {
//         type: RECEIVE_CURRENT_USER,
//         currentUser
//     }
// };

// export const logoutCurrentUser = () => {
//     return {
//         type: LOGOUT_CURRENT_USER
//     }
// };

// export const receiveErrors = errors => {
//     return {
//         type: RECEIVE_SESSION_ERRORS,
//         errors
//     }
// };

// // export const signup = user => {
// //     return (dispatch) => {
// //         return APIUtil.signup(user).then(user => {
// //             dispatch(receiveCurrentUser(user)).then(err => {
// //                 dispatch(receiveErrors(err.resposeJSON))
// //             })
// //         })
// //     }
// // };
// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(user => (
//         dispatch(receiveCurrentUser(user))
//     ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//     ))
// );

// // export const login = user => {
// //     return (dispatch) => {
// //         const receiveErrorCB = err => {
// //             dispatch(receiveErrors(err.resposeJSON))
// //         }
// //         const receiveUserCB = user => {
// //             return dispatch(receiveCurrentUser(user))
// //         }

// //         return APIUtil.login(user).then(
// //             receiveUserCB, receiveErrorCB
// //         )
// //     }
// // };
// export const login = user => dispatch => (
//     APIUtil.login(user).then(user => (
//         dispatch(receiveCurrentUser(user))
//     ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//     ))
// );

// // export const logout = () => {
// //     return (dispatch) => {
// //         return APIUtil.logout().then(user => {
// //             dispatch(logoutCurrentUser())
// //         })
// //     }
// // };
// export const logout = () => dispatch => (
//   APIUtil.logout().then(user => (
//     dispatch(logoutCurrentUser())
//   ))
// );

import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);