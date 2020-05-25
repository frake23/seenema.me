var express = require('express');
var fetch = require('node-fetch');

var config = require('../config.json');

var router = express.Router();

router.get('/youtube', (req, res) => {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    const params = {
        part: 'snippet',
        q: req.query.q,
        maxResults: 15,
        type: 'video',
        key: config.API_KEY
    }
    url.search = new URLSearchParams(params).toString()

    fetch(url)
        .then((response) =>
            response.json()
        )
        .then(json =>
            res.json(json)
        )
})

module.exports = router
