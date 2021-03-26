
export const fetchPins = (board) => {
    return $.ajax({
        url: '/api/pins',
        method: 'GET',
        data: {board}
    })
}

export const fetchPin = (pinId) => {
    return $.ajax({
        url: `/api/pins/${pinId}`
    })
}

export const createPin = (pin) => {
    return $.ajax({
        url: '/api/pins',
        method: 'POST',
        data: { pin }
    })
}

export const updatePin = (pin) => {
    return $.ajax({
        url: `/api/pins/${pin.id}`,
        method: 'PATCH',
        data: { pin }
    })
}

export const deletePin = (pinId) => {
    return $.ajax({
        url: `/api/pins/${pinId}`,
        method: "DELETE"
    })
}