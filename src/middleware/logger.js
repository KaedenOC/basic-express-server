'use strict';

// const { request } = require('express');

const logger = (req, res, next) => {
  console.log({
    method: req.method,
    path: req.path,
  });

  //next called with no argument means move on to the next middleware
  next();
};



module.exports = logger;
