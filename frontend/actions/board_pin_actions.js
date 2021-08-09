import * as BoardPinApiUtil from '.././util/board_pin_api_util';

export const createBoardPin = (boardPin) => {
        return BoardPinApiUtil.createBoardPin(boardPin);
}

export const deleteBoardPin = (boardPinId) => {
        return BoardPinApiUtil.deleteBoardPin(boardPinId);
}