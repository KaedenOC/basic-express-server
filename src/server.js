'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFound = require('./error-handler/404');
const internalServerError = require('./error-handler/500');



//create express singleton
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(logger);

//proof of life
app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

//person path
app.get('/person', validator, (req, res, next) => {
  console.log(req.query);
  res.status(200).send(req.query);
});


app.use('*', notFound);
app.use(internalServerError);

const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };
