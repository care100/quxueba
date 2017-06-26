var express = require('express');
var router = express.Router();
var school = require('../controller/public/school')
var auth = require('../controller/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.session.user)
	res.render('index', { title: 'index' });
});

/* GET school page. */
router.get('/school', school.index);

/* GET login page. */
router.get('/login', auth.loginPage);

/* POST login params. */
router.post('/login', auth.login);

/* GET logout. */
router.get('/logout', auth.logout);

module.exports = router;
