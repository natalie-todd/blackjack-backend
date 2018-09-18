const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const monk = require('monk');
const morgan = require('mongo-morgan-ext');
// const db =  monk('localhost:27017/test');
const mongo = require('mongodb');

app.use(morgan("dev"));
app.use(bodyParser.json());

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));