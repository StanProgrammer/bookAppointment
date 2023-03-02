const Sequelize  = require('sequelize');


const sequelize = new Sequelize('booking', 'root', 'atib', {
    host: 'localhost',
    dialect: 'mysql'
  });
  module.exports=sequelize