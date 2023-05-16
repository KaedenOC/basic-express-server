'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

//create express singleton
const app = express();
// const PORT = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());




const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };
