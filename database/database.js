const Sequelize = require("sequelize");

const connection = new Sequelize('asks', 'root', '1032', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;