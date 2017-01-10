// Main module loading
var express = require('express');

// Router module creation
var router = express.Router();

// Get users listing
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Export router
module.exports = router;
