const express = require('express');
const session = require('express-session');
const redis = require('ioredis');
const cors = require('cors');

const config = require('./config.json');

const RedisStore = require('connect-redis')(session);
const redisClient = redis();

const searchRouter = require('./routes/search');
const roomRouter = require('./routes/room');

const app = express();

app.use(cors({ credentials: true, origin : "http://localhost:3000"}));
app.use(session({
    store: new RedisStore({client: redisClient}),
    name: config.SESSION_NAME,
    secret: config.SESSION_SECRET,
    cookie: {
        secure: process.env.NODE_ENV == "production"
    },
    resave: false,
}));

app.use('/search', searchRouter);
app.use('/room', roomRouter);

app.listen(3001, () => console.log('started'));
