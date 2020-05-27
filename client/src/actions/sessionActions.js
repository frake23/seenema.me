const SET_ROOM = 'SET_ROOM';
const SET_USERNAME = 'SET_USERNAME';

export const setRoom = room => {
    return {
        type: SET_ROOM,
        payload: room
    }
}

export const setUsername = username => {
    return {
        type: SET_USERNAME,
        payload: username
    }
};

export { SET_USERNAME, SET_ROOM };
