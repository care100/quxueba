var School = require('../../models/School')
var User = require('../../models/User')
var Course = require('../../models/Course')

exports.index = (req, res, next) => {
	School.findOne({
		where: {
			userId: req.session.user.id
		},
		include: [Course]
	}).then((school) => {
		console.log(school)
		var data = {
			title: 'School userCenter',
			courses: school.courses,
			// user: req.session.user
		}
		res.render('users/school', data);
	}).catch(err => {
		console.log(err)
	})

	// School.findAll({
	// 	include: [User]
	// }).then(schools => {
	// 	console.log(schools)
	// 	console.log('---------------------')
	// 	// var user = school.getUser()
	// 	// console.log(user)
	// 	var data = {
	// 		title: 'School userCenters',
	// 		users: schools,
	// 		// user: req.session.user
	// 	}
	// 	res.render('users/school', data);
	// 	// console.log(school.user.dataValues)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// res.render('public/school', { title: 'School', users: [{username: 887788}] });
}