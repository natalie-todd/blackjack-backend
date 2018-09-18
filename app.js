require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
var cors = require('cors');
const monk = require('monk');
const db =  monk('localhost:27017/test');
// const morgan = require('mongo-morgan-ext');
// const commentRoutes = require("./routes/comments");
// const router = express.Router();
// const mongo = require('mongodb');

// app.use(morgan("dev"));
app.use(bodyParser.json());

// app.use(commentRoutes);

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));