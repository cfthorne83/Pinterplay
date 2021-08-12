

export const fetchFollows = () => {
    return $.ajax({
        url: '/api/friendships'
    })
}

export const createFollow = (friendship) => {
    return $.ajax({
        url: "/api/friendships",
        method: "POST",
        data: { friendship }
    })
}

export const deleteFollow = (friendshipId) => {
    $.ajax ({
                url: `/api/friendships/${friendshipId}`,
                method: "DELETE",
                data: { friendshipId, }
            })
}