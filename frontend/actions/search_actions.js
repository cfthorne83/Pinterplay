export const SEARCH_INPUT = 'SEARCH_INPUT';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';

export const searchInput = (input) => {
    return {
        type: SEARCH_INPUT,
        input
    };
};

export const clearSearchTerm = () => {
  return {
    type: CLEAR_SEARCH_TERM
  }
}