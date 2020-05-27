import {
    SET_ROOM, SET_USERNAME
} from '../actions/sessionActions';

const initialState = {
    room: null,
    username: ''
}

const session = (state=initialState, action) => {
    switch (action.type) {
        case SET_ROOM:
            return {
                ...state,
                room: action.payload
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
