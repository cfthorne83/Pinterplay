
export const fetchPins = (data) => {
    return $.ajax({
        url: '/api/pins',
        method: 'GET',
        data: {data}
    })
}

export const fetchPin = (pinId) => {
    return $.ajax({
        url: `/api/pins/${pinId}`
    })
}

export const createPin = (formData) => {
    $.ajax({
        url: '/api/pins',
        method: 'POST',
        data: {formData}
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