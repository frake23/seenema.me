var express = require('express');

var router = express.Router();

router.post('/create', (req, res) => {
    if (!req.session.username)
        req.session.username = Math.random().toString(36).substr(2, 9);
    res.json({
        room: {
            id: Math.random().toString(36).substr(2, 6)
        },
        username: req.session.username
    });
})

module.exports = router;
