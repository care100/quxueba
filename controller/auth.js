var School = require('../models/School')
var User = require('../models/User')
var md5 = require('md5')
var config = require('../config')

exports.loginPage = (req, res, next) => {
	console.log(req.session)
	res.render('login', { title: 'Login' });
}

exports.login = (req, res, next) => {
	User.findOne({
		where: {
			username: req.body.username,
			password: md5(config.salt + req.body.password)
		}
	}).then(user => {
		if (user) {
			req.session.user = user
			if (user.type === 1) {
				res.redirect('/users/guardian')
			} else {
				res.redirect('/users/school')
			}
		} else {
			res.render('login', { title: 'Login', wrong: 'wrong' });
		}
	})
}

exports.isLogin = (req, res, next) => {
	if (req.session.user) {
		next()
	} else {
		res.redirect('/login')
	}
}

exports.isSchool = (req, res, next) => {
	if (req.session.user.type === 2) {
		next()
	} else {
		res.send('no limit')
	}
}

exports.isGuardian = (req, res, next) => {
	if (req.session.user.type === 1) {
		next()
	} else {
		res.send('no limit')
	}
}

exports.logout = (req, res, next) => {
	req.session.user = undefined
	res.redirect('/login')
}