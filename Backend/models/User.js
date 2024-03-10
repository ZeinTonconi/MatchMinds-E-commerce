const { DataTypes } = require('sequelize')
const sequelize = require('../database/config.database')

const User = sequelize.define('users', {
    id: {
        type: DataTypes.STRING(32),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(255)
    },
    password: {
        type: DataTypes.STRING(32)
    },
    phone: {
        type: DataTypes.STRING(10),
        defaultValue: "0"
    }
},
{
    timestamps: false
}
)

module.exports = User;