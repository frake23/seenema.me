const express = require('express');
const session = require('express-session');
const redis = require('ioredis');
const cors = require('cors');

const RedisStore = require('connect-redis')(session);
const redisClient = redis();

const searchRouter = require('./routes/search')

const app = express();

app.use(cors({ credentials: true }));
app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: 'blold'
}));

app.use('/search', searchRouter);

app.listen(3001, () => console.log('started'));
