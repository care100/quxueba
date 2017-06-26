var express = require('express');
var router = express.Router();
var school = require('../controller/users/school')
var auth = require('../controller/auth')

/* AUTH is school. */
router.use(auth.isSchool)

/* GET users listing. */
router.get('/', school.index);

module.exports = router;
