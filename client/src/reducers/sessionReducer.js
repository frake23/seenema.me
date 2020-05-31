import {
    SET_ROOMNAME, SET_USERNAME
} from '../actions/sessionActions';

const initialState = {
    roomname: '',
    username: ''
}

const session = (state=initialState, action) => {
    switch (action.type) {
        case SET_ROOMNAME:
            return {
                ...state,
                roomname: action.payload
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:
            return state
    }
}

export default session;
