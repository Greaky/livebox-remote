const express = require('express');
const bodyParser = require('body-parser');
const controllerTV = require('../controller/tele');

const router = express.Router();

router.get('/:keycode', controllerTV.set);
router.get('/channel/:keycode', controllerTV.channel);

module.exports = router;
