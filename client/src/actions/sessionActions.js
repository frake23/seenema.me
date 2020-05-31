const SET_ROOMNAME = 'SET_ROOMNAME';
const SET_USERNAME = 'SET_USERNAME';

export const setRoomname = roomname => {
    return {
        type: SET_ROOMNAME,
        payload: roomname
    }
}

export const setUsername = username => {
    return {
        type: SET_USERNAME,
        payload: username
    }
};

export { SET_USERNAME, SET_ROOMNAME };
