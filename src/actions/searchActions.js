const SET_SEARCH_LIST = 'SET_SEARCH_LIST';
const SET_SEARCH_HOSTING = 'SET_SEARCH_HOSTING';
const SET_SEARCH_RESULTS_VISIBILITY = 'SET_SEARCH_RESULTS_VISIBILITY';
const SET_SEARCH_INPUT_TEXT = 'SET_SEARCH_INPUT_TEXT';

export const setSearchResutlts = searchResults => {
    return {
        type: SET_SEARCH_LIST,
        payload: searchResults
    }
};

export const setSearchHosting = hosting => {
    return {
        type: SET_SEARCH_HOSTING,
        payload: hosting
    }
};

export const setSearchResultsListVisibility = visibility => {
    return {
        type: SET_SEARCH_RESULTS_VISIBILITY,
        payload: visibility
    }
};

export const setSearchInputText = inputText => {
    return {
        type: SET_SEARCH_INPUT_TEXT,
        payload: inputText
    }
};

export {SET_SEARCH_LIST, SET_SEARCH_HOSTING, SET_SEARCH_RESULTS_VISIBILITY, SET_SEARCH_INPUT_TEXT};
