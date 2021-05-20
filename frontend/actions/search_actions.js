export const SEARCH_INPUT = 'SEARCH_INPUT';

export const searchInput = (input) => {
    return {
        type: SEARCH_INPUT,
        input
    };
};