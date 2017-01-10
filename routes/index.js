// Main module loading
var express = require('express');

// Router module creation
var router = express.Router();

/* Get home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Philippe Beck', id: 'index' });
});

// Export router
module.exports = router;
