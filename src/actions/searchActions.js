import { youtubeSearch, ytItemToResultObject } from "../api/youtube";

const SET_SEARCH_LIST = 'SET_SEARCH_LIST';
const SET_SEARCH_HOSTING = 'SET_SEARCH_HOSTING';
const SET_SEARCH_RESULTS_VISIBILITY = 'SET_SEARCH_RESULTS_VISIBILITY';
const SET_SEARCH_INPUT_TEXT = 'SET_SEARCH_INPUT_TEXT';
const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING';

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

export const setSearchLoading = loading => {
    return {
        type: SET_SEARCH_LOADING,
        payload: loading
    }
};

export const fetchSearchResults = () => {
    return (dispatch, getState) => {
        const state = getState();
        const inputText = state.search.inputText;

        dispatch(setSearchLoading(true));
        dispatch(setSearchResultsListVisibility(true));

        if (inputText.length === 0)
            return Promise.resolve();
        else {
            if (state.search.hosting === 'youtube') {
                return youtubeSearch(inputText)
                    .then((res) =>
                        dispatch(setSearchResutlts(res.data.items.map(result => ytItemToResultObject(result))))
                    )
                    .then(() => dispatch(setSearchLoading(false)))
            }
        }
    }
};

export {SET_SEARCH_LIST, SET_SEARCH_HOSTING, SET_SEARCH_RESULTS_VISIBILITY, SET_SEARCH_INPUT_TEXT, SET_SEARCH_LOADING};
