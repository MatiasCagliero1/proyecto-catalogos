var express = require('express');
var router = express.Router();
var searchcontroller = require('../controllers/searchcontroller');


router.get('/search/:word', searchcontroller.index);

module.exports = router;
