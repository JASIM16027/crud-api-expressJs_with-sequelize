const { Sequelize } = require('sequelize');
const db = new Sequelize('develop', 'root', '123456', {
    dialect: 'mysql',
});

module.exports = db