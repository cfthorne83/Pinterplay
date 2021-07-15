// export const fetchFollows = () => {
//     return $.ajax({
//         url: '/api/follows'
//     })
// }

export const createFollow = (follow) => {
    return $.ajax({
        url: '/api/friendships',
        method: 'POST',
        data: { follow }
    }) 
}

export const deleteFollow = (follow) => {
    return $.ajax({
        url: '/api/friendships',
        method: 'DELETE',
        data: { follow }
    }) 
}
