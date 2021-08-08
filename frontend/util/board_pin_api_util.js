export const createBoardPin = (boardPin) => {
    return $.ajax({
            url: "/api/board_pins",
            method: "POST",
            data: { boardPin }
        })
}

export const deleteBoardPin = (boardPinId) => {
    return $.ajax({
        url: `/api/board_pins/${boardPinId}`,
        method: "DELETE"
    })
}

// export const updateBoard = (board) => {
//     return $.ajax({
//         url: `/api/boards/${board.id}`,
//         method: 'PATCH',
//         data: { board }
//     })
// }
