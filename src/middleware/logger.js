'use strict';

const logger = (req, res, next) => {
  console.log('logger middleware hit');

  //next called with no argument means move on to the next middleware
  next();
};



module.exports = logger;
