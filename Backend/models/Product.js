const { DataTypes } = require('sequelize')
const sequelize = require('../database/config.database')

const Product = sequelize.define('product', {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING(500)
    },
    name: {
        type: DataTypes.STRING(255)
    },
    nameOfImage: {
        type: DataTypes.STRING(1000)
    },
    price: {
        type: DataTypes.FLOAT(5)
    },
    quantity: {
      type: DataTypes.INTEGER
    },
},
{
    timestamps: false
}
)

module.exports = Product;