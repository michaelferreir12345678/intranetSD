var express = require('express');
var router = express.Router();
var impressoraController = require('../controllers/impressoraController');

router.get('/', impressoraController.impressora);

module.exports = router;