var express = require('express');
var router = express.Router();
const user = require('../controllers/user');

/**
 * 个人中心
 */
router.get('/personal', user.personal);

module.exports = router;
