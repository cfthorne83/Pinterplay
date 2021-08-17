

export const fetchFollows = (userId) => {
    return $.ajax({
        url: '/api/friendships',
        method: "GET",
        data: { userId }
    })
}

export const createFollow = (friendship) => {
    return $.ajax({
        url: "/api/friendships",
        method: "POST",
        data: { friendship }
    })
}

export const deleteFollow = (friendship) => {
    return $.ajax ({
                url: `/api/friendships`,
                method: "DELETE",
                data: { friendship }
            })
}