export const createBoardPin = (board) => {
    return dispatch => {
        return BoardApiUtil.createBoard(board).then(board => {
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