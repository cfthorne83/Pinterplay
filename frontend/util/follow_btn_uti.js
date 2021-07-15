// export const fetchBoards = () => {
//     return $.ajax({
//         url: '/api/boards'
//     })
// }

export const createFollow = (follow) => {
    return $.ajax({
        url: '/api/friendships',
        method: 'POST',
        data: { follow }
    }) 
}

// export const deleteBoard = (boardId) => {
//     return $.ajax({
//         url: `/api/boards/${boardId}`,
//         method: "DELETE"
//     })
// }