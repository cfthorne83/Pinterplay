import * as PinApiUtil from '.././util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePins = (pins) => {
    return {
        type: RECEIVE_ALL_PINS,
        pins
    }
};

export const receivePin = (data) => {
    return {
        type: RECEIVE_PIN,
        board: data.pin
    }
};

export const removePin = (pinId) => {
    return {
        type: REMOVE_PIN,
        pinId
    }
};

export const fetchPins = () => {
    return dispatch => {
        return PinApiUtil.fetchPins().then(pins => {
            dispatch(receivePins(pins))
        })
    }
}

export const fetchBoard = (boardId) => {
    return dispatch => {
        return BoardApiUtil.fetchBoard(boardId).then(data => {
            dispatch(receiveBoard(data))
        })
    }
}

export const createBoard = (board) => {
    return dispatch => {
        return BoardApiUtil.createBoard(board).then(board => {
            dispatch(receiveBoard(board))
        })
    }
}

export const updateBoard = (board) => {
    return dispatch => {
        return BoardApiUtil.updateBoard(board).then(board => {
            dispatch(receiveBoard(board))
        })
    }
}
export const deleteBoard = (boardId) => {
    return dispatch => {
        return BoardApiUtil.deleteBoard(boardId).then(() => {
            dispatch(removeBoard(boardId))
        })
    }
}