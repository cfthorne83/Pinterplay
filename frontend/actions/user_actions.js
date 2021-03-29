import * as UserApiUtil from "../util/user.api.util";

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (data) => {
    debugger
    return {
        type: RECEIVE_USER,
        user: data.user
    }
};

export const updateUser = (user) => {
    debugger
    return dispatch => {
        return UserApiUtil.updateUser(user).then( user => {
            dispatch(receiveUser(user))
        })
    }
}
