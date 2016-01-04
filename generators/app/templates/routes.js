var express      = require('express');


module.exports = function(app, passport) {

  // =====================================
  // API routes below, for Web client:
  // =====================================

  var apiRouter = express.Router();



  app.use('/api', apiRouter);
};
