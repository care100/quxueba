var Sequelize = require('sequelize')
var sequelize = require('./sequelize')
var School = require('./School')
var Kid = require('./Kid')

var User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},
	type: {
		type: Sequelize.INTEGER
	},
	phone: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	}
})
if (typeof School === 'function') {
	User.hasOne(School, {foreignKey: {name: 'userId'}})
	School.belongsTo(User)
}

if (typeof Kid === 'function') {
	User.hasMany(Kid, {foreignKey: {name: 'userId'}})
	Kid.belongsTo(User)
}
module.exports = User