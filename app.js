require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
var cors = require('cors');
const monk = require('monk');
const morgan = require('morgan');
const db = monk(process.env.MONGODB_URI);
// const commentRoutes = require("./routes/comments");
// const router = express.Router();
// const mongo = require('mongodb');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const users = db.get('user');
const games = db.get('game');

db.then(() => {
  console.log("Connected correctly to server");
})

app.get('/', (req, res) => {
  console.log('test test');
  users.find()
    //   [{
    //   'id': 1,
    //   'email': 'luvmykitty@gmail.com',
    //   'username': 'luvmykitty',
    //   'password': 'rosie1234',
    //   'total_winnings': 0,
    //   'total_games_won': 0
    // },
    // {
    //   'id': 2,
    //   'email': 'gbeanster@gmail.com',
    //   'username': 'gbeanster',
    //   'password': 'rusticpenguin',
    //   'total_winnings': 0,
    //   'total_games_won': 0
    // }]
    .then((result) => {
      res.json(result);
      console.log('found');
    })
});

app.get('/games', (req, res) => {
  console.log('games test');
  games.find()
    // [{
    //     'id': 1,
    //     'date': '2018-09-20',
    //     'score': 0,
    //     'winnings': 0
    //   },
    //   {
    //     'id': 2,
    //     'date': '2018-09-20',
    //     'score': 0,
    //     'winnings': 0
    //   }]
    .then((result) => {
      res.json(result);
      console.log('found');
    })
});

// app.use(commentRoutes);

app.use(notFound)
app.use(errorHandler)

// eslint-disable-next-line
function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don't log less important (automatic) browser requests
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({ error: 'Url not found', status: 404, url })
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port)
  .on("error", console.error.bind(console))
  .on("listening", console.log.bind(console, "Listening on " + port));