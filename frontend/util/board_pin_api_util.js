export const createBoardPin = (board_pin) => {
    return $.ajax({
            url: "/api/board_pins",
            method: "POST",
            data: { board_pin }
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
