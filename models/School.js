var Sequelize = require('sequelize')
var sequelize = require('./sequelize')
var User = require('./User')
var Course = require('./Course')

var School = sequelize.define('school', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	brand: {
		type: Sequelize.STRING
	}
})
if (typeof User === 'function') {
	User.hasOne(School, {foreignKey: {name: 'userId'}})
	School.belongsTo(User)
}

if (typeof Course === 'function') {
	School.hasMany(Course, {foreignKey: {name: 'schoolId'}})
	Course.belongsTo(School)
}
module.exports = School