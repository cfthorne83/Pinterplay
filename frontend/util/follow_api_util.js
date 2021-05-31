
export const createFollow = (friendship) => {
    return $.ajax({
        url: "/api/friendships",
        method: "POST",
        data: { friendship }
    })
}

export const deleteFollow = (friendship) => {
    $.ajax ({
                url: "/api/friendships",
                method: "DELETE",
                data: { friendship }
            })
}