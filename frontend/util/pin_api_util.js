
export const fetchPins = () => {
    return $.ajax({
        url: '/api/pins'
    })
}

export const fetchPin = (pinId) => {
    return $.ajax({
        url: `/api/pins/${pinId}`
    })
}

export const createBoard = (board) => {
    return $.ajax({
        url: '/api/boards',
        method: 'POST',
        data: { board }
    })
}

export const updateBoard = (board) => {
    return $.ajax({
        url: `/api/boards/${board.id}`,
        method: 'PATCH',
        data: { board }
    })
}

export const deleteBoard = (boardId) => {
    return $.ajax({
        url: `/api/boards/${boardId}`,
        method: "DELETE"
    })
}