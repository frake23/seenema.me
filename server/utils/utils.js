const createUsername = () => Math.random().toString(36).substr(2, 9);

const createRoomname = () => Math.random().toString(36).substr(2, 6).toUpperCase();

module.exports = {
    createRoomname,
    createUsername
}
