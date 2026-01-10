require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
_db = client.db();
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', professionalRoutes);


initDb((err, mongodb) => {
  if (err) {
    console.error('Failed to connect to DB', err);
  } else {
    console.log('DB connected');
    // тут можно работать с db
  }
});