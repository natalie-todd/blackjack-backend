const express = require('express');
const app = new express();
const bodyParser = require("body-parser");
const morgan = require('mongo-morgan-ext');
const db =  monk('localhost:27017/test');
const mongo = require('mongodb');
const monk = require('monk');