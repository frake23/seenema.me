const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const socket = require('socket.io');
const http = require('http');

const config = require('./config.json');

const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');
const redisClient = new Redis();

const searchRouter = require('./routes/search');
const roomRouter = require('./routes/room');

const app = express();
const server = http.createServer(app);
const io = socket(server)

app.use(cors({ credentials: true, origin : "http://localhost:3000"}));
app.use(session({
    store: new RedisStore({client: redisClient}),
    name: config.SESSION_NAME,
    secret: config.SESSION_SECRET,
    cookie: {
        secure: process.env.NODE_ENV == "production"
    },
    resave: false,
    saveUninitialized: false
}));

app.use('/search', searchRouter);
app.use('/room', roomRouter);

mongoose.connect('mongodb://localhost/seenema', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
server.listen(3001)
