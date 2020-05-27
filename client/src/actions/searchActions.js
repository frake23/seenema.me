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

export const setSearchLoading = loading => {
    return {
        type: SET_SEARCH_LOADING,
        payload: loading
    }
};

export const fetchSearchResults = inputText => (dispatch, getState) => {
    const state = getState();


    dispatch(setSearchLoading(true));
    dispatch(setSearchResultsListVisibility(true));

    if (inputText.length === 0)
        return Promise.resolve();
    fetch(`http://localhost:3001/search/${state.search.hosting}?q=${inputText}`)
        .then((res) =>
            res.json()
        )
        .then((json) =>
            dispatch(setSearchResutlts(json))
        )
        .then(() => dispatch(setSearchLoading(false))).catch(e => console.log(e))
};

export { SET_SEARCH_LIST, SET_SEARCH_HOSTING, SET_SEARCH_RESULTS_VISIBILITY, SET_SEARCH_INPUT_TEXT, SET_SEARCH_LOADING };
