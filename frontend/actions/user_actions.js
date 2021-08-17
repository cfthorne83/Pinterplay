import usersReducer from "../reducers/users_reducer";
import * as UserApiUtil from "../util/user.api.util";

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import { receiveCurrentUser } from "./session_actions";

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
};

// export const updateUser = (user) => {
//     return dispatch => {
//         return UserApiUtil.updateUser(user).then( user => {
//             dispatch(receiveUser(user))
//         })
//     }
// }

export const fetchUsers = () => {
    return dispatch => {
        return UserApiUtil.fetchUsers().then( users => {
            dispatch(receiveUsers(users))
        })
    }
}

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
