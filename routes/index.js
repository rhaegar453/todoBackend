var express = require('express');
var router = express.Router();

var respond=require('../config/respond');
/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json(respond(true, 'Welcome to ToDoApplication'));
});

module.exports = router;
