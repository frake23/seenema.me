import {
    SET_SEARCH_LIST,
    SET_SEARCH_HOSTING,
    SET_SEARCH_RESULTS_VISIBILITY,
    SET_SEARCH_INPUT_TEXT,
    SET_SEARCH_LOADING
} from '../actions/searchActions';

const initialState = {
    hosting: 'youtube',
    results: [],
    resultsVisibility: false,
    inputText: '',
    loading: false
};

const search = (state=initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_HOSTING:
            return {
                ...state,
                hosting: action.payload
            };
        case SET_SEARCH_LIST:
            return {
                ...state,
                results: action.payload
            };
        case SET_SEARCH_RESULTS_VISIBILITY:
            return {
                ...state,
                resultsVisibility: action.payload
            };
        case SET_SEARCH_INPUT_TEXT:
            return {
                ...state,
                inputText: action.payload
            };
        case SET_SEARCH_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};

export default search;