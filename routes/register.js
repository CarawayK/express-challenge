var express = require('express');
var router = express.Router();

/* POST process to register a new user. */
router.post('/', function(req, res, next) {
  let poststatus = 200
  let message = 'Register request received with invalid format'
  if (req.body.username && req.body.email) {
    // process a new user
    poststatus = 200
    message = 'OK'
  }
  res.status(poststatus).send(message);
});

module.exports = router;
