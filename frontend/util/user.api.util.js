
export const updateUser = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
}

export const fetchUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`
    })
}