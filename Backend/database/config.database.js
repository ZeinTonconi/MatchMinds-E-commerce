const { Sequelize } = require('sequelize')


const dbConnection = () => {
    const infoDB = {
        name: "ecommerce", // DB name
        user: "root1", // user DB
        password: "alexelmejor", // password DB
        host: "localhost", // host DB
        dialect: "mysql", // Type DB
        port: 3306 // Port DB
    }

  const sequelize = new Sequelize(infoDB.name, infoDB.user, infoDB.password, {
    host: infoDB.host,
    dialect: infoDB.dialect,
    port: infoDB.port
  })
  return sequelize
}

module.exports = dbConnection()