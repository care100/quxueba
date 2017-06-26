var School = require('../../models/School')
var User = require('../../models/User')

exports.index = (req, res, next) => {
	// User.findOne({
	// 	include: [School]
	// }).then((user) => {
		// console.log(user.dataValues)
		// console.log(user.school.dataValues)
	// }).catch(err => {
	// 	console.log(err)
	// })

	School.findAll({
		include: [User]
	}).then(schools => {
		console.log(schools)
		console.log('---------------------')
		// var user = school.getUser()
		// console.log(user)
		res.render('public/school', { title: 'School', schools: schools });
		// console.log(school.user.dataValues)
	}).catch(err => {
		console.log(err)
	})

	// res.render('public/school', { title: 'School', users: [{username: 887788}] });
  
}