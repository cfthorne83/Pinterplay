

export const fetchFollows = (data) => {
    return $.ajax({
        url: '/api/friendships',
        method: "GET",
        data: { data }
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