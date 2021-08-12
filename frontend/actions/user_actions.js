import * as UserApiUtil from "../util/user.api.util";

export const RECEIVE_USER = 'RECEIVE_USER';
import { receiveCurrentUser } from "./session_actions";

// export const receiveUser = (user) => {
//     return {
//         type: RECEIVE_USER,
//         user
//     }
// };

// export const updateUser = (user) => {
//     return dispatch => {
//         return UserApiUtil.updateUser(user).then( user => {
//             dispatch(receiveUser(user))
//         })
//     }
// }

export const updateUser = (user) => {
    return dispatch => {
        return UserApiUtil.updateUser(user).then( user => {
            dispatch(receiveCurrentUser(user))
        })
    }
}

export const fetchUser = (userId) => {
    return dispatch => {
        return UserApiUtil.fetchUser(userId).then( user => {
            dispatch(receiveCurrentUser(user))
        })
    }
}
