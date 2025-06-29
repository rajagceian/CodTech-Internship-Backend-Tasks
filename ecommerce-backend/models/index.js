const sequelize = require('../config/db');
const User = require('./user');
const Product = require('./product');
const Order = require('./order');

sequelize.sync();

module.exports = { sequelize, User, Product, Order };
