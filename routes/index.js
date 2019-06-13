var express = require('express');
var router = express.Router();
var Index = require('../controllers/index')

/* GET home page. */
router.get('/', Index.Index_home);

module.exports = router;
