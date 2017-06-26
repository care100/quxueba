var express = require('express');
var router = express.Router();
var guardian = require('../controller/users/guardian')
var auth = require('../controller/auth')

/* AUTH is guardian. */
router.use(auth.isGuardian)

/* GET users listing. */
router.get('/', guardian.index);

module.exports = router;
