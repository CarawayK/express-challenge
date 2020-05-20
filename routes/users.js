var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET specific user listing. */
router.get('/userid', function(req, res, next) {
  res.send('specific userid: ');
});

module.exports = router;
