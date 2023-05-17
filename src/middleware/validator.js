'use strict';

//TODO: middleware

module.exports = (req, res, next) => {

  if(req.query){
    next();
  } else {
    next('please enter a valid name');
  }
};
