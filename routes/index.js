const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const router = express.Router();
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express test test' });
});

module.exports = router;
