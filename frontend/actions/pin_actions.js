import * as PinApiUtil from "../util/pin_api_util"

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePins = (pins) => {
    return {
        type: RECEIVE_ALL_PINS,
        pins
    }
};

export const receivePin = (data) => {
    return {
        type: RECEIVE_PIN,
        pin: data.pin
    }
};

export const removePin = (pinId) => {
    return {
        type: REMOVE_PIN,
        pinId
    }
};

export const fetchPins = (data) => {
    return dispatch => {
        return PinApiUtil.fetchPins(data).then(pins => {
            dispatch(receivePins(pins))
        })
    }
}

export const fetchPin = (pinId) => {
    return dispatch => {
        return PinApiUtil.fetchPin(pinId).then( data => {
            dispatch(receivePin(data))
        })
    }
}

export const createPin = (pin) => {
    return dispatch => {
        return PinApiUtil.createPin(pin).then(pin => {
            dispatch(receivePin(pin))
        })  
    }
}

export const updatePin = (pin) => {
    return dispatch => {
        return PinApiUtil.updatePin(pin).then(pin => {
            dispatch(receivePin(pin))
        })
    }
}
export const deletePin = (pinId) => {
    return dispatch => {
        return PinApiUtil.deletePin(pinId).then(() => {
            dispatch(removePin(pinId))
        })
    }
}