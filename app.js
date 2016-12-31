// Main Module Loading
var express = require('express');

// Middlewares Loading
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mailer = require('nodemailer');

// Routes Loading
var index = require('./routes/index');
var users = require('./routes/users');
var contact = require('./routes/contact');

// Main Application
var app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares Using
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Pages Generation
app.use('/', index);
app.use('/users', users);
app.use('/contact', contact);

// Catch 404 & Forward to Error Handler
app.use(function(req, res, next) {
  var err = new Error('Page introuvable !');
  err.status = 404;
  next(err);
});

// Error Handler
app.use(function(err, req, res, next) {
  // Set Locals (only providing error in development)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the Error Page
  res.status(err.status || 500);
  res.render('error');
});

// Export Application
module.exports = app;
