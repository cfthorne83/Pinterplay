
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_All_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollows = (follows) => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
        follows
    }
}

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

export const fetchFollows = () => {
    return dispatch => {
        return FollowApiUtil.fetchFollows().then(follows => {
            dispatch(receiveFollows(follows))
        })
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

export const deleteFollow = (friendship, followId) => {
    debugger
    return dispatch => {
        return FollowApiUtil.deleteFollow(friendship,followId).then( (followId) => {
            dispatch(removeFollow(followId))
        })
    }
}