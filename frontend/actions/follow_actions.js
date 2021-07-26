
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

export const removeFollow = (followId) => {
    return {
        type: REMOVE_FOLLOW,
        followId
    }
}

export const createFollow = (friendship) => {
    return dispatch => {
        return FollowApiUtil.createFollow(friendship)
        .then( follow => {
            dispatch(receiveFollow(follow))
        })
    }
}

export const deleteFollow = (friendship) => {
    // return dispatch => {
        return FollowApiUtil.deleteFollow(friendship)
        // .then( followId => {
        //     dispatch(receiveFollow(followId))
        // }
        // )
    // }
}