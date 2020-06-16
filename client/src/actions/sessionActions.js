const SET_ROOMNAME = 'SET_ROOMNAME';
const SET_USERNAME = 'SET_USERNAME';

export const setRoomname = roomname => {
    return {
        type: SET_ROOMNAME,
        payload: roomname
    }
};

export const setUsername = username => {
    return {
        type: SET_USERNAME,
        payload: username
    }
};

export const fetchRoom = roomname => dispath => {
    fetch(`http://localhost:3001/room?name=${roomname}`, {
        credentials: 'include'
    })
    .then(res => res.json())
    .then(json => {
        dispath(setRoomname(json.roomname));
        dispath(setUsername(json.username));
    })
    .catch(e => {

    })
}

export { SET_USERNAME, SET_ROOMNAME };
