const Sequelize = require('sequelize');

const connection = new Sequelize('todaspergutnas','root','7355608',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;