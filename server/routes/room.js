const express = require('express');

const Room = require('../models/room');

const router = express.Router();

router.post('/create', (req, res) => {
    if (!req.session.username)
        req.session.username = Math.random().toString(36).substr(2, 9);

    const roomName = Math.random().toString(36).substr(2, 6).toUpperCase();
    const room = new Room({
        name: roomName
    });
    room.save().then(room => console.log(room));
    res.json({
        roomname: room.name,
        username: req.session.username
    });
    
});

router.get('/*', (req, res) => {
    //console.log(req.path.s)// Room.find({name: req.path}).then(room => console.log(room))
});

module.exports = router;
