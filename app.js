// Main module loading
var express = require('express');

// Middlewares loading
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sm = require('sitemap');

// Routes loading
var index = require('./routes/index');
var users = require('./routes/users');

// Main application
var app = express();
var sitemap = sm.createSitemap ({
  hostname: 'http://philippebeck.net',
  cacheTime: 6000000,
  urls: [
    { url: '/', changefreq: 'weekly', priority: 0.5 }
  ]
});

app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send(xml);
  });
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares using
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Pages generation
app.use('/', index);
app.use('/users', users);

// Catch 404 & forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page introuvable !');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals (only providing error in development)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export application
module.exports = app;
