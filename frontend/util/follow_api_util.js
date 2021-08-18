

export const fetchFollows = (friendship) => {
    return $.ajax({
        url: '/api/friendships',
        method: "GET",
        data: { friendship }
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