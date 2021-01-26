import * as BoardApiUtil from '.././util/board_api_util';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const receiveBoards = (boards) => {
    return {
        type: RECEIVE_ALL_BOARDS,
        boards
    }
};

export const receiveBoard = (board) => {
    return {
        type: RECEIVE_BOARD,
        board
    }
};

export const removeBoard = (boardId) => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
};

export const fetchBoards = () => {
    return dispatch => {
        return PostApiUtil.fetchBoards().then(boards => {
            dispatch(receiveBoards(boards))
        })
    }
}

export const fetchBoard = (boardId) => {
    return dispatch => {
        return PostApiUtil.fetchBoard(boardId).then(board => {
            dispatch(receiveBoard(board))
        })
    }
}

export const createBoard = (board) => {
    return dispatch => {
        return PostApiUtil.createBoard(board).then(board => {
            dispatch(receiveBoard(board))
        })
    }
}

export const updateBoard = (board) => {
    return dispatch => {
        return PostApiUtil.updateBoard(board).then(board => {
            dispatch(receiveBoard(board))
        })
    }
}
export const deleteBoard = (boardId) => {
    return dispatch => {
        return PostApiUtil.deleteBoard(boardId).then(() => {
            dispatch(removeBoard(boardId))
        })
    }
}