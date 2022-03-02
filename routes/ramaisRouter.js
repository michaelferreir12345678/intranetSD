var express = require('express');
var router = express.Router();
var ramaisController = require('../controllers/ramaisController');

router.get('/', ramaisController.ramais);

module.exports = router;