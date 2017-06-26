var Sequelize = require('sequelize');
var config = require('../config')

var sequelize = new Sequelize(config.database.db, config.database.username, config.database.password, {
	host: config.database.host,
	port: config.database.port,
	dialect: 'mysql'
})

module.exports = sequelize