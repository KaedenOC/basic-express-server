'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');



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


const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };
