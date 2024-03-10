const { DataTypes } = require('sequelize')
const sequelize = require('../database/config.database');
const User = require('./User');
const Product = require('./Product');

const Cart = sequelize.define('cart', {
    cartId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    totalAmountOfMoney: {
        type: DataTypes.INTEGER
    },
},
{
    timestamps: false
}
)

module.exports = Cart;

User.belongsToMany(Product, { through: Cart });
Product.belongsToMany(User, { through: Cart });