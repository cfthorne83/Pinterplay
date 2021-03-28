// import * as PinApiUtil from '.././util/pin_api_util';
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

// export const receivePin = (pin) => {
//     return {
//         type: RECEIVE_PIN,
//         pin
//     }
// };
export const receivePin = (pin) => {
    
    return {
        type: RECEIVE_PIN,
        pin: pin
    }
};

export const removePin = (pinId) => {
    return {
        type: REMOVE_PIN,
        pinId
    }
};

export const fetchPins = (board) => {
    return dispatch => {
        return PinApiUtil.fetchPins(board).then(pins => {
            dispatch(receivePins(pins))
        })
    }
}

// export const fetchPin = (pinId) => {
//     return dispatch => {
//         return PinApiUtil.fetchPin(pinId).then(pin => {
//             dispatch(receivePin(pin))
//         })
//     }
// }
export const fetchPin = (pinId) => {
    return dispatch => {
        return PinApiUtil.fetchPin(pinId).then( pin => {
            dispatch(receivePin(pin))
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