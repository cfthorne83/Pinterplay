
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
    debugger
    return $.ajax({
        url: '/api/pins',
        method: 'POST',
        data: {pin}
        // contentType: false,
        // processData: false
    })
    // .then(
    //     (response) => console.log(response.message),
    //     (response) => console.log(response.responseJSON)
    // );
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