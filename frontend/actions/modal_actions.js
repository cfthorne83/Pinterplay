export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, options = {}) => {
// export const openModal = (modal) => {
    return {
        type: OPEN_MODAL,
        modal: modal,
        options: options
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};