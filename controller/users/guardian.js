var User = require('../../models/User')
var Kid = require('../../models/Kid')

exports.index = (req, res, next) => {
	// User.findOne({
	// 	include: [School]
	// }).then((user) => {
		// console.log(user.dataValues)
		// console.log(user.school.dataValues)
	// }).catch(err => {
	// 	console.log(err)
	// })

	User.findOne({
		where: {
			id: req.session.user.id
		},
		include: [Kid]
	}).then(user => {
		console.log(user.kids)
		// console.log(user)
		var data = {
			title: 'Guardian userCenter',
			kids: user.kids,
			// user: req.session.user
		}
		res.render('users/guardian', data);
	}).catch(err => {
		console.log(err)
	})

	// Kid.findAll({
	// 	where: {
	// 		userId: req.session.user.id
	// 	},
	// 	include: [User]
	// }).then(kids => {
	// 	console.log(kids[0].user)
	// 	console.log('---------------------')
	// 	// var user = school.getUser()
	// 	// console.log(user)
	// 	var data = {
	// 		title: 'Guardian userCenter',
	// 		kids: kids,
	// 		// user: req.session.user
	// 	}
	// 	res.render('users/guardian', data);
	// 	// console.log(school.user.dataValues)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// res.render('public/school', { title: 'School', users: [{username: 887788}] });
}