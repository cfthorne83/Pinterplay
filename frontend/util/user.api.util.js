
export const updateUser = (user) => {
    debugger
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
}