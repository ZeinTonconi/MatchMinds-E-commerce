const { Sequelize } = require('sequelize')


const dbConnection = () => {
    const infoDB = {
        name: "ecommerce",
        user: "root",
        password: "charmander1",
        host: "localhost",
        dialect: "mysql",
        port: 3306
    }


  const sequelize = new Sequelize(infoDB.name, infoDB.user, infoDB.password, {
    host: infoDB.host,
    dialect: infoDB.dialect,
    port: infoDB.port
  })
  return sequelize
}

module.exports = dbConnection()