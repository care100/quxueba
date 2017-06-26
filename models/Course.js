var Sequelize = require('sequelize')
var sequelize = require('./sequelize')
var School = require('./School')

var Course = sequelize.define('course', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER
	},
	official: {
		type: Sequelize.INTEGER
	},
	enrollStatus: {
		type: Sequelize.INTEGER
	},
	courseStatus: {
		type: Sequelize.INTEGER
	},
	address: {
		type: Sequelize.STRING
	}
})
if (typeof School === 'function') {
	School.hasMany(Course, {foreignKey: {name: 'schoolId'}})
	Course.belongsTo(School)
}
module.exports = Course