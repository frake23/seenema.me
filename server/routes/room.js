const express = require('express');

const utils = require('../utils/utils')

const Room = require('../models/room');

const router = express.Router();

router.post('/create', (req, res) => {
    const roomName = utils.createRoomname();
    const room = new Room({
        name: roomName
    });
    room.save();
    res.send({
        roomname: room.name,
    });
    
});

router.get('/*', (req, res) => {
    if (!req.session.username)
        req.session.username = utils.createUsername();

    const roomname = req.query.name;
    Room.findOne({name: roomname})
        .then((room) => {
            if (!room)
                res.status(404).send({ message: 'Room not found' })
            else
                res.send({
                    roomname,
                    username: req.session.username
                })
        })
});

module.exports = router;
