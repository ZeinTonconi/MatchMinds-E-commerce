// Variables de entorno
// require('dotenv').config()

const express = require('express')
const cors = require('cors')
const sequelize = require('./database/config.database')


// require('./models/index.models')



class Server {

  constructor () {
    
    this.port = 8080;
    // this.port = process.env.APP_PORT
    this.app = express()

    // Path de mis servicios
    // this.taskPath = '/api/tasks'
    this.productsPath = '/api/products';

    

    this.init()
  }

  async init () {
    await sequelize.sync({ force: false })
    this.middlewares()
    this.routes()

  }


  middlewares () {
    this.app.use(cors())

    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

//   getConnection = (req, res, next) => {
//     const { pool, connection } = this.connection
//     req.pool = pool
//     req.connection = connection
//     next()
//   }

  routes () {
    
    this.app.use(this.productsPath, require('./routes/products.routes'));
  }

  start () {
    this.app.listen(this.port, () => {
      console.log(`Server online on port ${this.port}`)
    })
  }
}

module.exports = Server