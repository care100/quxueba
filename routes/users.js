var express = require('express');
var router = express.Router();
var auth = require('../controller/auth')
var school = require('./school')
var guardian = require('./guardian')

/* AUTH is logined. */
router.use(auth.isLogin)

router.use('/school', school)
router.use('/guardian', guardian)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET school users index page. */
// router.get('/school', school.index);

/* GET guardian users index page. */
// router.get('/guardian', guardian.index);

module.exports = router;
