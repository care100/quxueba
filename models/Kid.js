var Sequelize = require('sequelize')
var sequelize = require('./sequelize')
var User = require('./User')

var Kid = sequelize.define('kid', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	birthdate: {
		type: Sequelize.DATE
	},
	sex: {
		type: Sequelize.INTEGER
	}
})
if (typeof User === 'function') {
	User.hasOne(Kid, {foreignKey: {name: 'userId'}})
	Kid.belongsTo(User)
}
module.exports = Kid