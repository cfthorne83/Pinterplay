
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

export const createPin = (pin) => {
    // const screen = document.querySelector(".create-pin-form__screen");
    // return $.ajax ({
    //                 url: "/api/pins",
    //                 method: "POST",
    //                 data: formData,
    //                 contentType: false, 
    //                 processData: false
    //             })
    //             .then(
    //                 (response) => {
    //                     screen.style.display = "none";
                //         // this.setState({loading: false});
                //         // this.props.openModal("pinShowLink", response.pin.id);
                //         // this.props.openModal("pinShowLink", { 
                //         //                                         id: response.pin.id, 
                //         //                                         board: board.innerText,
                //         //                                         image: response.pin.image_url
                //         //                                     });
                //         // this.handleDelete();
                //     } 
                // )
                //
                
    $.ajax({
        url: '/api/pins',
        method: 'POST',
        data: {pin}
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